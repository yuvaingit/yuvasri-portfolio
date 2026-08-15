// All content below is sourced directly from Yuvasri N's resume.
// Update this file if her resume changes — every component reads from here.

export const profile = {
  name: 'Yuvasri N',
  firstName: 'Yuvasri',
  role: 'Computer Science Engineering Student',
  tagline: 'Final-year CSE student building at the intersection of AI, software & product. Turning complex problems into thoughtful, intuitive digital experiences.',
  email: 'yuvasri.nag@gmail.com',
  phone: '+91 9445274771',
  linkedin: 'https://www.linkedin.com/in/yuvasrinag0281',
  github: 'https://github.com/yuvaingit',
  location: 'Tiruchirappalli, Tamil Nadu, India',
  interests: ['Smart Healthcare Systems', 'UI & UX', 'AI in Medical Imaging', 'Machine Learning'],
  languages: ['English', 'Tamil', 'Telugu', 'Hindi (conversant)'],
}

export const education = [
  {
    school: 'SRM Institute of Science and Technology',
    location: 'Tiruchirappalli',
    degree: 'B.Tech · Computer Science and Engineering',
    duration: '2023 — 2027',
    stat: '9.2',
    statLabel: 'CGPA / 10',
  },
  {
    school: 'The TVS School',
    location: 'Madurai',
    degree: 'Class XII · Computer Science',
    duration: '2023',
    stat: '82.83%',
    statLabel: 'Percentage',
  },
]

export const skills = [
  {
    category: 'Programming Languages',
    items: ['C++', 'C', 'Python'],
  },
  {
    category: 'Web Development & API',
    items: ['HTML', 'CSS', 'React', 'Node.js', 'REST APIs', 'Postman'],
  },
  {
    category: 'Databases',
    items: ['SQL', 'Firebase', 'PostgreSQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Microsoft Azure', 'AWS (EC2 basics)', 'Firebase (Hosting & Auth)', 'Netlify / Vercel'],
  },
  {
    category: 'Design & Simulation',
    items: ['Figma', 'Framer', 'Unity (Game Dev)'],
  },
  {
    category: 'CRM & Enterprise Tech',
    items: ['Zoho CRM', 'SAP ERP Systems', 'SAP HANA'],
  },
]

export const softSkills = ['Communication', 'Attention to detail', 'Adaptability', 'Teamwork', 'Problem solving']

export const projects = [
  {
    id: 'endometriosis-ai',
    name: 'AI-Based Endometriosis Diagnosis Using Ultrasound',
    overview: 'A CNN-driven diagnostic aid that reads transvaginal ultrasound images the way a specialist would — flagging what needs a closer look.',
    problem: 'Endometriosis is notoriously difficult to diagnose non-invasively, often delaying treatment by years.',
    solution: 'A convolutional neural network trained to detect Endometriosis directly from transvaginal ultrasound images.',
    features: [
      'CNN-based image classification pipeline',
      'Lesion segmentation for precise localization',
      'Uncertainty estimation to support clinical trust',
    ],
    contribution: 'Built and trained the CNN model end-to-end, and implemented the segmentation and uncertainty-estimation layers.',
    tech: ['Python', 'CNN', 'Image Segmentation', 'Machine Learning'],
    link: null,
    tag: 'AI / Healthcare',
  },
  {
    id: 'clinical-mentorship',
    name: 'Clinical Mentorship Workspace',
    overview: 'A full-stack workspace connecting clinical interns with senior mentors — case tracking and AI-assisted feedback in one dashboard.',
    problem: 'Interns need fast, consistent feedback on diagnoses, but senior clinicians\' time is limited.',
    solution: 'A role-based platform with real-time case tracking, plus Google Gemini AI acting as a first-pass reviewer.',
    features: [
      'Role-based dashboards for interns and mentors',
      'Real-time case tracking via Supabase',
      'Gemini AI validates intern diagnoses automatically',
      'Feedback aligned with senior clinical reasoning',
    ],
    contribution: 'Developed the full-stack application and integrated the Gemini AI review layer.',
    tech: ['Next.js', 'FastAPI', 'Supabase', 'Google Gemini AI'],
    link: null,
    tag: 'Full-Stack / Healthcare',
  },
  {
    id: 'erp-crm',
    name: 'Enterprise Resource Planning (ERP) & CRM System',
    overview: 'A responsive Micro-CRM with a live Kanban board, activity tracking and a notification hub — built for real workflows, not demos.',
    problem: 'Small teams need CRM/ERP tooling that\'s fast, themeable and doesn\'t demand a huge stack.',
    solution: 'A modular Micro-CRM built on Next.js with advanced client-side state management for drag-and-drop pipelines.',
    features: [
      'Dynamic drag-and-drop Kanban board',
      'Real-time activity tracking',
      'Interactive notification hub',
      'Multi-currency support',
      'Persistent local storage & customizable themes',
    ],
    contribution: 'Designed and built the entire system, including the modular navigation architecture.',
    tech: ['Next.js', 'Tailwind CSS v4', 'State Management'],
    link: 'https://github.com/yuvaingit',
    tag: 'Full-Stack / Enterprise',
  },
]

export const experience = [
  {
    org: 'MyCaptain',
    role: 'Campus Marketing Executive',
    duration: 'Dec 2024 — Mar 2025',
    points: [
      'Promoted MyCaptain courses on campus as college ambassador, onboarding 15+ students.',
      'Ran peer referral campaigns and led social media outreach drives.',
      'Coordinated monthly enrolment reporting with the wider team.',
    ],
    tech: ['Marketing', 'Social Outreach', 'Reporting'],
  },
  {
    org: 'IppoPay Technologies',
    role: 'Frontend Developer Intern',
    duration: 'Jun 2024 — Jul 2024',
    points: [
      'Developed a fully responsive shopping website interface using HTML and CSS.',
    ],
    tech: ['HTML', 'CSS'],
  },
  {
    org: 'Corizo',
    role: 'App Development Intern',
    duration: 'Feb 2024 — Mar 2024',
    points: [
      'Built a Flutter-based mobile application for online ticket booking.',
    ],
    tech: ['Flutter'],
  },
]

export const certifications = [
  {
    name: 'Unity Certified Associate: Game Developer',
    org: 'Unity Technologies',
    date: 'April 2026',
    link: '#',
  },
  {
    name: 'Introduction to Genomic Technologies',
    org: 'John Hopkins University',
    date: 'Jun 2025',
    link: '#',
  },
  {
    name: 'SAP S/4HANA Certification (ERP using GBI 3.30)',
    org: 'SAP University Alliances',
    date: 'March 2025',
    link: null,
  },
  {
    name: 'Android App Development',
    org: 'Wipro Dice ID · CRZ52776',
    date: 'April 2024',
    link: null,
  },
]

export const achievements = [
  {
    title: 'Hackathon Winner',
    detail: 'TheNorthCap University, Gurgaon',
    date: 'Apr 2025',
    type: 'Hackathon',
  },
  {
    title: '3rd Place — Ideathon',
    detail: 'CEG, Anna University',
    date: 'Aug 2023',
    type: 'Hackathon',
  },
  {
    title: 'International Conference Presentation',
    detail: 'International Conference on Aligned Health and Medical Science, Karpagam Institute of Technology, Coimbatore',
    date: 'Mar 2025',
    type: 'Conference',
  },
  {
    title: 'PR Lead, ACM Student Chapter',
    detail: 'SRMIST Tiruchirappalli ACM Student Chapter',
    date: 'Jun 2025 — Present',
    type: 'Leadership',
  },
]
