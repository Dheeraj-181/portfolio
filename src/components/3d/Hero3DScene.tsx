import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Rotating digital engineering core
function DigitalCore({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Group>(null);
  const secondRingRef = useRef<THREE.Group>(null);
  const innerIcosaRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    // Parallax response
    const targetX = mouse.current.x * 0.4;
    const targetY = mouse.current.y * 0.4;

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX * 0.5, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY * 0.5, 0.05);
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.3;
      outerRingRef.current.rotation.x += delta * 0.15;
    }

    if (secondRingRef.current) {
      secondRingRef.current.rotation.y += delta * 0.25;
      secondRingRef.current.rotation.z += delta * 0.1;
    }

    if (innerIcosaRef.current) {
      innerIcosaRef.current.rotation.y -= delta * 0.4;
      innerIcosaRef.current.rotation.x -= delta * 0.3;
    }
  });

  return (
    <group position={[1.2, 0, 0]}>
      {/* Inner glowing geometric icosahedron */}
      <mesh ref={innerIcosaRef} scale={0.9}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color="#00f2fe"
          emissive="#005577"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>

      {/* Main glass-like geometric shell */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.5, 2]} />
        <meshPhysicalMaterial
          color="#1e293b"
          roughness={0.15}
          metalness={0.1}
          transmission={0.6}
          ior={1.4}
          thickness={0.5}
          transparent
          opacity={0.85}
          wireframe={false}
        />
      </mesh>

      {/* Orbital gyroscopic rings */}
      <group ref={outerRingRef}>
        <mesh>
          <torusGeometry args={[2.2, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.9}
          />
        </mesh>
      </group>

      <group ref={secondRingRef} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[2.6, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#4f46e5"
            emissiveIntensity={0.4}
            roughness={0.3}
            metalness={0.9}
          />
        </mesh>
      </group>
    </group>
  );
}

// Floating 3D Code and Data Nodes
function FloatingDataNodes({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);

  const nodePositions = useMemo(() => [
    { pos: [2.5, 1.8, -0.5] as [number, number, number], label: 'AI/ML', color: '#00f2fe' },
    { pos: [3.2, -1.2, 0.5] as [number, number, number], label: 'SaaS', color: '#818cf8' },
    { pos: [-0.5, 2.2, 0.2] as [number, number, number], label: 'React', color: '#38bdf8' },
    { pos: [-0.2, -2.0, -0.8] as [number, number, number], label: 'Cloud', color: '#34d399' },
    { pos: [3.5, 0.4, -1.2] as [number, number, number], label: 'ONNX', color: '#a78bfa' },
  ], []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouse.current.x * 0.3, 0.03);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouse.current.y * 0.3, 0.03);
    }
  });

  return (
    <group ref={groupRef} position={[1.2, 0, 0]}>
      {nodePositions.map((node, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <group position={node.pos}>
            <mesh>
              <boxGeometry args={[0.18, 0.18, 0.18]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={0.8}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
            <mesh scale={1.3}>
              <boxGeometry args={[0.18, 0.18, 0.18]} />
              <meshBasicMaterial color={node.color} wireframe transparent opacity={0.4} />
            </mesh>
          </group>
        </Float>
      ))}
    </group>
  );
}

// Interconnected Particle Field with Line Network
function ParticleNetworkField({ count = 120 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyan = new THREE.Color('#00f2fe');
    const blue = new THREE.Color('#3b82f6');
    const purple = new THREE.Color('#8b5cf6');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 14;
      pos[i3 + 1] = (Math.random() - 0.5) * 9;
      pos[i3 + 2] = (Math.random() - 0.5) * 8 - 1;

      // Color variation
      const r = Math.random();
      const c = r < 0.4 ? cyan : r < 0.8 ? blue : purple;
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Static Fallback UI if WebGL is unavailable or fails
function WebGLFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Glowing concentric animated circles */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '30s' }} />
        <div className="absolute inset-6 rounded-full border border-blue-500/30 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
        <div className="absolute inset-16 rounded-full border border-violet-500/30 animate-spin" style={{ animationDuration: '15s' }} />
        
        {/* Center digital emblem */}
        <div className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-900/40 via-slate-900/80 to-blue-950/40 border border-cyan-500/40 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center shadow-[0_0_35px_rgba(0,242,254,0.15)]">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping mb-2" />
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300">ENGINEERING</span>
          <span className="text-[10px] font-mono text-slate-400">LAB CORE</span>
        </div>

        {/* Orbiting nodes */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 shadow-sm">
          ONNX V2
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-slate-900/90 border border-blue-500/40 text-[10px] font-mono text-blue-300 shadow-sm">
          CLOUD SAAS
        </div>
        <div className="absolute top-1/2 -left-6 -translate-y-1/2 px-2 py-0.5 rounded-full bg-slate-900/90 border border-violet-500/40 text-[10px] font-mono text-violet-300 shadow-sm">
          REACT / FLUTTER
        </div>
      </div>
    </div>
  );
}

// Error Boundary for WebGL
class WebGLErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any) {
    console.warn('WebGL Rendering fallback active:', error);
  }
  render() {
    if (this.state.hasError) {
      return <WebGLFallback />;
    }
    return this.props.children;
  }
}

export function Hero3DScene() {
  const mouse = useRef({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState<boolean | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setIsSupported(Boolean(gl));
    } catch {
      setIsSupported(false);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isSupported === false) {
    return <WebGLFallback />;
  }

  return (
    <div className="w-full h-full relative pointer-events-none select-none">
      <WebGLErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, isMobile ? 1.5 : 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full"
        >
          {/* Lighting: Selective, realistic, not oversaturated */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} color="#f0f9ff" />
          <pointLight position={[-4, -3, 2]} intensity={1.8} color="#00f2fe" distance={10} />
          <pointLight position={[4, 3, -2]} intensity={1.5} color="#818cf8" distance={10} />
          <spotLight position={[0, 5, 4]} intensity={0.8} angle={0.6} penumbra={0.8} color="#38bdf8" />

          {/* 3D Scene Components */}
          <DigitalCore mouse={mouse} />
          {!isMobile && <FloatingDataNodes mouse={mouse} />}
          <ParticleNetworkField count={isMobile ? 60 : 130} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}

export default Hero3DScene;
