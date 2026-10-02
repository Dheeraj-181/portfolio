import React, { useRef, useEffect } from 'react';

interface FaceMeshCanvasProps {
  activeStep: number;
}

export const FaceMeshCanvas: React.FC<FaceMeshCanvasProps> = ({ activeStep }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Define facial landmark reference points normalized between -1 and 1
    const landmarkSeeds: [number, number, number][] = [
      // Chin and jawline
      [-0.7, -0.3, 0.2], [-0.6, -0.6, 0.1], [-0.35, -0.85, 0.3], [0, -0.95, 0.4], [0.35, -0.85, 0.3], [0.6, -0.6, 0.1], [0.7, -0.3, 0.2],
      // Cheeks
      [-0.5, -0.1, 0.4], [0.5, -0.1, 0.4], [-0.35, -0.2, 0.6], [0.35, -0.2, 0.6],
      // Nose bridge and tip
      [0, 0.35, 0.6], [0, 0.15, 0.75], [0, -0.05, 0.9], [-0.15, -0.15, 0.75], [0.15, -0.15, 0.75],
      // Left eye
      [-0.45, 0.35, 0.5], [-0.3, 0.4, 0.55], [-0.18, 0.35, 0.5], [-0.3, 0.3, 0.48],
      // Right eye
      [0.18, 0.35, 0.5], [0.3, 0.4, 0.55], [0.45, 0.35, 0.5], [0.3, 0.3, 0.48],
      // Eyebrows
      [-0.5, 0.55, 0.4], [-0.3, 0.6, 0.45], [-0.15, 0.52, 0.42],
      [0.15, 0.52, 0.42], [0.3, 0.6, 0.45], [0.5, 0.55, 0.4],
      // Mouth & Lips
      [-0.25, -0.45, 0.65], [0, -0.42, 0.75], [0.25, -0.45, 0.65], [0, -0.55, 0.7],
      // Forehead
      [-0.5, 0.75, 0.2], [-0.2, 0.85, 0.3], [0, 0.88, 0.35], [0.2, 0.85, 0.3], [0.5, 0.75, 0.2],
    ];

    const connections: [number, number][] = [
      // Jaw
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
      // Nose
      [11, 12], [12, 13], [13, 14], [13, 15],
      // Left Eye
      [16, 17], [17, 18], [18, 19], [19, 16],
      // Right Eye
      [20, 21], [21, 22], [22, 23], [23, 20],
      // Eyebrows
      [24, 25], [25, 26], [27, 28], [28, 29],
      // Mouth
      [30, 31], [31, 32], [32, 33], [33, 30],
      // Forehead
      [34, 35], [35, 36], [36, 37], [37, 38],
      // Cross mesh
      [2, 30], [4, 32], [13, 31], [11, 25], [11, 28],
    ];

    const render = () => {
      time += 0.02;
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.36;

      // Subtle rotation
      const rotY = Math.sin(time * 0.8) * 0.25;
      const rotX = Math.cos(time * 0.6) * 0.12;

      // Scanline position
      const scanY = (Math.sin(time * 1.5) * 0.5 + 0.5) * height;

      // Project 3D landmarks
      const projected = landmarkSeeds.map(([x, y, z]) => {
        // Rotate around Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        // Rotate around X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        // Perspective projection
        const pz = z2 + 2.5;
        const px = cx + (x1 / pz) * scale * 2.2;
        const py = cy - (y1 / pz) * scale * 2.2;

        return { px, py, pz };
      });

      // Draw bounding box if detection stage (Step 2+)
      if (activeStep >= 2) {
        ctx.strokeStyle = activeStep >= 8 ? '#10b981' : '#00f2fe';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([8, 4]);
        const boxSize = scale * 1.6;
        ctx.strokeRect(cx - boxSize / 2, cy - boxSize / 2 - 10, boxSize, boxSize * 1.15);
        ctx.setLineDash([]);

        // Corner brackets
        const bX = cx - boxSize / 2;
        const bY = cy - boxSize / 2 - 10;
        const bW = boxSize;
        const bH = boxSize * 1.15;
        const cLen = 16;
        ctx.strokeStyle = '#00f2fe';
        ctx.lineWidth = 2.5;
        // Top-left
        ctx.beginPath();
        ctx.moveTo(bX, bY + cLen); ctx.lineTo(bX, bY); ctx.lineTo(bX + cLen, bY);
        ctx.stroke();
        // Top-right
        ctx.beginPath();
        ctx.moveTo(bX + bW - cLen, bY); ctx.lineTo(bX + bW, bY); ctx.lineTo(bX + bW, bY + cLen);
        ctx.stroke();
        // Bottom-left
        ctx.beginPath();
        ctx.moveTo(bX, bY + bH - cLen); ctx.lineTo(bX, bY + bH); ctx.lineTo(bX + cLen, bY + bH);
        ctx.stroke();
        // Bottom-right
        ctx.beginPath();
        ctx.moveTo(bX + bW - cLen, bY + bH); ctx.lineTo(bX + bW, bY + bH); ctx.lineTo(bX + bW, bY + bH - cLen);
        ctx.stroke();
      }

      // Draw wireframe connections
      ctx.lineWidth = 0.9;
      connections.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1 || !p2) return;

        ctx.strokeStyle = activeStep >= 4 ? 'rgba(0, 242, 254, 0.45)' : 'rgba(59, 130, 246, 0.25)';
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      });

      // Draw landmark nodes
      projected.forEach((p, idx) => {
        const isCorePoint = [12, 17, 21, 31].includes(idx);
        ctx.fillStyle = isCorePoint ? '#00f2fe' : (activeStep >= 5 ? '#38bdf8' : '#818cf8');
        ctx.beginPath();
        ctx.arc(p.px, p.py, isCorePoint ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fill();

        // 512D Vector rays in Step 5+
        if (activeStep >= 5 && isCorePoint) {
          ctx.strokeStyle = 'rgba(0, 242, 254, 0.2)';
          ctx.beginPath();
          ctx.moveTo(p.px, p.py);
          ctx.lineTo(p.px + Math.cos(time + idx) * 35, p.py + Math.sin(time + idx) * 35);
          ctx.stroke();
        }
      });

      // Dynamic Laser Scanline
      if (activeStep <= 6) {
        const grad = ctx.createLinearGradient(0, scanY - 8, 0, scanY + 8);
        grad.addColorStop(0, 'rgba(0, 242, 254, 0)');
        grad.addColorStop(0.5, 'rgba(0, 242, 254, 0.6)');
        grad.addColorStop(1, 'rgba(0, 242, 254, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(cx - scale, scanY - 8, scale * 2, 16);

        ctx.strokeStyle = 'rgba(0, 242, 254, 0.9)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx - scale, scanY);
        ctx.lineTo(cx + scale, scanY);
        ctx.stroke();
      }

      // Step 8 & 9: Verification Overlay
      if (activeStep >= 8) {
        ctx.fillStyle = 'rgba(16, 185, 129, 0.12)';
        ctx.fillRect(cx - scale * 0.9, cy - scale * 0.9, scale * 1.8, scale * 1.8);

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 12px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('IDENTITY VERIFIED [CONFIDENCE: MATCH]', cx, cy + scale * 0.95);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeStep]);

  return (
    <div className="relative w-full aspect-square max-w-[360px] mx-auto rounded-2xl bg-surface-200/90 border border-border-subtle overflow-hidden shadow-2xl flex items-center justify-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-full h-full object-contain relative z-10"
      />
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">
          LIVE MESH VISUALIZER
        </span>
      </div>
      <div className="absolute bottom-3 right-3 z-20 text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-white/10">
        ARCFACE 512-D
      </div>
    </div>
  );
};

export default FaceMeshCanvas;
