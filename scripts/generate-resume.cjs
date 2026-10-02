const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const timesRoman = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const timesBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const timesOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // US Letter size: 612 x 792 points
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();
  const margin = 40;
  let y = height - margin;

  const primaryColor = rgb(0.05, 0.1, 0.2); // Dark navy
  const sectionColor = rgb(0.08, 0.25, 0.45); // Deep blue
  const bodyColor = rgb(0.15, 0.15, 0.15); // Charcoal text
  const mutedColor = rgb(0.4, 0.4, 0.4); // Muted gray
  const lineColor = rgb(0.8, 0.82, 0.85);

  function drawLine(yPos) {
    page.drawLine({
      start: { x: margin, y: yPos },
      end: { x: width - margin, y: yPos },
      thickness: 0.75,
      color: lineColor,
    });
  }

  function drawSectionHeader(title) {
    y -= 14;
    page.drawText(title.toUpperCase(), {
      x: margin,
      y,
      size: 11,
      font: timesBold,
      color: sectionColor,
    });
    y -= 4;
    drawLine(y);
    y -= 10;
  }

  // Header
  page.drawText('KALVAPALLE KRISHNA DHEERAJ REDDY', {
    x: margin,
    y,
    size: 18,
    font: timesBold,
    color: primaryColor,
  });
  y -= 15;

  page.drawText('Computer Science & Engineering Student | Full-Stack Developer | AI/ML Enthusiast | SaaS Builder', {
    x: margin,
    y,
    size: 9.5,
    font: timesOblique,
    color: sectionColor,
  });
  y -= 13;

  const contactText1 = 'Rayachoty, AP, India  |  Phone: +91 8555080042  |  Email: dheerajreddy181@gmail.com';
  const contactText2 = 'GitHub: github.com/Dheeraj-181  |  LinkedIn: linkedin.com/in/krishna-dheeraj-reddy-5b054a3a7';
  page.drawText(contactText1, {
    x: margin,
    y,
    size: 8.5,
    font: timesRoman,
    color: mutedColor,
  });
  y -= 10;
  page.drawText(contactText2, {
    x: margin,
    y,
    size: 8.5,
    font: timesRoman,
    color: mutedColor,
  });
  y -= 7;
  drawLine(y);

  // Education
  drawSectionHeader('Education');

  // B.Tech
  page.drawText('Sri Sai Institute of Technology and Science (SSITS)', {
    x: margin,
    y,
    size: 10,
    font: timesBold,
    color: bodyColor,
  });
  page.drawText('Rayachoty, AP | 2024 - 2028 (Expected)', {
    x: width - margin - 170,
    y,
    size: 9,
    font: timesRoman,
    color: mutedColor,
  });
  y -= 12;
  page.drawText('Bachelor of Technology in Computer Science and Engineering', {
    x: margin,
    y,
    size: 9,
    font: timesRoman,
    color: bodyColor,
  });
  y -= 14;

  // 12th
  page.drawText('Sri Chaitanya Junior College', {
    x: margin,
    y,
    size: 9.5,
    font: timesBold,
    color: bodyColor,
  });
  page.drawText('Vijayawada, AP | 2024', {
    x: width - margin - 170,
    y,
    size: 9,
    font: timesRoman,
    color: mutedColor,
  });
  y -= 11;
  page.drawText('Intermediate (12th Standard) - Board of Intermediate Education | Aggregate: 87.8%', {
    x: margin,
    y,
    size: 8.5,
    font: timesRoman,
    color: bodyColor,
  });
  y -= 14;

  // 10th
  page.drawText('Vignan High School', {
    x: margin,
    y,
    size: 9.5,
    font: timesBold,
    color: bodyColor,
  });
  page.drawText('Rayachoty, AP | 2022', {
    x: width - margin - 170,
    y,
    size: 9,
    font: timesRoman,
    color: mutedColor,
  });
  y -= 11;
  page.drawText('Secondary School Certificate (10th Standard) - AP SSC Board | Aggregate: 88.1%', {
    x: margin,
    y,
    size: 8.5,
    font: timesRoman,
    color: bodyColor,
  });
  y -= 6;

  // Technical Skills (C, Java, OOP, CapCut, DaVinci Resolve removed)
  drawSectionHeader('Technical Skills');

  const skills = [
    { label: 'Programming Languages', val: 'Python, JavaScript, SQL' },
    { label: 'Web & Cloud', val: 'React.js, HTML5, CSS3, Firebase, Cloud Firestore, REST APIs, Serverless Architecture' },
    { label: 'AI & Machine Learning', val: 'TensorFlow, PyTorch, Scikit-learn, NumPy, Pandas, Computer Vision, ArcFace, ONNX Runtime, FAISS' },
    { label: 'Mobile Development', val: 'Flutter, Firebase Mobile SDK' },
    { label: 'Tools & Analytics', val: 'Git, GitHub, Tableau, Power BI, MS Office' },
    { label: 'Core Engineering', val: 'Data Structures & Algorithms, RESTful APIs, Serverless Micro-Architecture' },
  ];

  skills.forEach(s => {
    page.drawText(`•  ${s.label}: `, {
      x: margin,
      y,
      size: 8.5,
      font: timesBold,
      color: bodyColor,
    });
    const labelWidth = timesBold.widthOfTextAtSize(`•  ${s.label}: `, 8.5);
    page.drawText(s.val, {
      x: margin + labelWidth,
      y,
      size: 8.5,
      font: timesRoman,
      color: bodyColor,
    });
    y -= 11.5;
  });

  // Projects
  drawSectionHeader('Technical Projects');

  // Aryanetix
  page.drawText('Aryanetix – Smart Institutional Management SaaS Platform', {
    x: margin,
    y,
    size: 10,
    font: timesBold,
    color: primaryColor,
  });
  page.drawText('aryanetix.dev887654321.workers.dev', {
    x: width - margin - 190,
    y,
    size: 8,
    font: timesBold,
    color: sectionColor,
  });
  y -= 12;
  const aryaPoints = [
    'Engineered an enterprise-grade institutional ecosystem integrating SuperAdmin, Principal, Teacher, and Student roles.',
    'Designed Face Recognition Engine V2 featuring ArcFace, ONNX Runtime, 512D embeddings, FAISS vector search, and anti-spoofing.',
    'Implemented multi-modal attendance including voice attendance, LMS integration, attendance analytics, and accessibility mode.',
    'Built secure architecture with AES-256-GCM encryption, Cloud Firestore serverless backend, and Flutter cross-platform mobile app.'
  ];
  aryaPoints.forEach(pt => {
    page.drawText(`- ${pt}`, { x: margin + 8, y, size: 8.2, font: timesRoman, color: bodyColor });
    y -= 10.5;
  });
  y -= 2;

  // ExamMap
  page.drawText('ExamMap – University-Focused Intelligent Study Planner', {
    x: margin,
    y,
    size: 9.5,
    font: timesBold,
    color: primaryColor,
  });
  page.drawText('React.js, Firebase, Cloud Firestore, Web Technologies', {
    x: width - margin - 200,
    y,
    size: 8,
    font: timesOblique,
    color: sectionColor,
  });
  y -= 12;
  const examPoints = [
    'Developed an intelligent academic schedule planner helping university students track syllabi, attendance thresholds, and backlogs.',
    'Implemented personalized study roadmap generation with automated exam revision countdowns and real-time alerts.'
  ];
  examPoints.forEach(pt => {
    page.drawText(`- ${pt}`, { x: margin + 8, y, size: 8.2, font: timesRoman, color: bodyColor });
    y -= 10.5;
  });
  y -= 2;

  // Flight Booking System
  page.drawText('Flight Ticket Booking System', {
    x: margin,
    y,
    size: 9.5,
    font: timesBold,
    color: primaryColor,
  });
  page.drawText('Firebase, Cloud Firestore, JavaScript, HTML/CSS', {
    x: width - margin - 200,
    y,
    size: 8,
    font: timesOblique,
    color: sectionColor,
  });
  y -= 12;
  const flightPoints = [
    'Built an end-to-end flight booking web application with real-time seat inventory, schedule lookup, and passenger data handling.',
    'Configured Firebase backend rules to maintain transaction integrity and secure booking histories.'
  ];
  flightPoints.forEach(pt => {
    page.drawText(`- ${pt}`, { x: margin + 8, y, size: 8.2, font: timesRoman, color: bodyColor });
    y -= 10.5;
  });
  y -= 2;

  // eBook Store
  page.drawText('eBook Store – Digital Reading & Commerce Platform', {
    x: margin,
    y,
    size: 9.5,
    font: timesBold,
    color: primaryColor,
  });
  page.drawText('JavaScript, Web Technologies, Payment Integration UI', {
    x: width - margin - 200,
    y,
    size: 8,
    font: timesOblique,
    color: sectionColor,
  });
  y -= 12;
  const ebookPoints = [
    'Created a responsive e-commerce web platform for browsing, previewing, and purchasing digital books.',
    'Integrated shopping cart management, subscription tiers, mock payment workflows, and responsive UI layout.'
  ];
  ebookPoints.forEach(pt => {
    page.drawText(`- ${pt}`, { x: margin + 8, y, size: 8.2, font: timesRoman, color: bodyColor });
    y -= 10.5;
  });

  // Certifications & Activities
  drawSectionHeader('Certifications & Activities');

  page.drawText('• Quantum Computing Certification', { x: margin, y, size: 8.5, font: timesBold, color: bodyColor });
  page.drawText('Foundational quantum principles, qubits, quantum gates, and computing concepts.', { x: margin + 175, y, size: 8.2, font: timesRoman, color: mutedColor });
  y -= 12;

  page.drawText('• IBM CSR Box Certification', { x: margin, y, size: 8.5, font: timesBold, color: bodyColor });
  page.drawText('Technical skills curriculum covering emerging technologies and professional readiness.', { x: margin + 175, y, size: 8.2, font: timesRoman, color: mutedColor });
  y -= 12;

  page.drawText('• Innovation & Activities:', { x: margin, y, size: 8.5, font: timesBold, color: bodyColor });
  page.drawText('Hackathons, SaaS product architecture, AI/ML experimentation, and institutional software development.', { x: margin + 115, y, size: 8.2, font: timesRoman, color: bodyColor });
  y -= 14;

  // Languages
  drawSectionHeader('Languages');
  page.drawText('English (Professional Working Proficiency)  •  Telugu (Native / Fluent)  •  Hindi (Conversational)', {
    x: margin,
    y,
    size: 8.5,
    font: timesRoman,
    color: bodyColor,
  });

  const pdfBytes = await pdfDoc.save();
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const outputPath = path.join(publicDir, 'resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Resume PDF successfully generated at: ${outputPath}`);
}

generateResume().catch(err => {
  console.error('Failed to generate resume:', err);
  process.exit(1);
});
