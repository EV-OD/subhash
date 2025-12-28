
import { Scale, Gavel, BookOpen, Shield, Users, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Building, Home, Lightbulb, GraduationCap, FileText, ScrollText } from 'lucide-react';

export const SITE_NAME = 'Adv. Subhash Lamichhane';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Articles' },
  { href: '/research-papers', label: 'Research Papers' },
  { href: '/academia', label: 'Academia' },
];

export const companyInfo = {
  address: 'Lalitpur, Patan, Nepal',
  email: 'lcsubhash1@gmail.com',
  phone: '+977 9811227216, 9860249284',
  footerTagline: 'Advocating for Justice, Committed to Academic Excellence.',
};

export const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
];

export const practiceAreas = [
  {
    title: 'Case Law Analysis',
    description: 'In-depth analysis of landmark judgments and legal precedents.',
    icon: Gavel,
    slug: 'case-law'
  },
  {
    title: 'Legal Research',
    description: 'Comprehensive research papers on contemporary legal issues.',
    icon: BookOpen,
    slug: 'legal-research'
  },
  {
    title: 'Academic Articles',
    description: 'Scholarly articles contributing to legal discourse and education.',
    icon: GraduationCap,
    slug: 'academic-articles'
  },
  {
    title: 'Legal Discussions',
    description: 'Engaging discussions on evolving legal frameworks and policies.',
    icon: Users,
    slug: 'legal-discussions'
  }
];

export const cvData = {
  profile: "Licensed Advocate ranked Top 10 in the 33rd Bar Council Exam, currently pursuing an LL.M. in Criminal and Corporate Law at Nepal Law Campus. Specializes in constitutionalism, writ jurisdiction, and legal research, with a strong foundation in statutory interpretation and Supreme Court precedents. Committed to academic rigor and ethical advocacy.",
  education: [
    {
      degree: "Graduate in Law (B.A. LL.B)",
      year: "2019-2024",
      institution: "Bright Vision Law College, Biratnagar-05, Morang",
      university: "Purbanchal University, Morang"
    },
    {
      degree: "Intermediate in Science Stream",
      year: "2017-2019",
      institution: "Saptagandaki Multiple Campus, Chitwan"
    },
    {
      degree: "Secondary Education Examination (SEE)",
      year: "2015-2017",
      institution: "Madi Secondary School, Chitwan"
    }
  ],
  experience: [
    {
      title: "Basic Training Program",
      organization: "Nepal Bar Council",
      date: "Dec 2025",
      description: "Participated in the mandatory Basic Training Program conducted by the Nepal Bar Council, focusing on professional ethics, advocacy skills, court procedures, drafting and pleading, client counseling, and practical aspects of legal practice in Nepal."
    },
    {
      title: "Legal Intern",
      organization: "Morang Bar Association",
      date: "2023 March - 2024 June",
      description: "Worked as a legal intern. Experience in government legal procedure documentation, court function and legal writing."
    },
    {
      title: "Participant",
      organization: "Philip C. Jessup International Law Moot Court Competition, Nepal Rounds",
      date: "",
      description: "Participated in the national rounds organized in coordination with the United States Embassy and ILSA. Gained practical exposure to international law research, written memorial preparation, and oral advocacy. Strengthened skills in case analysis, teamwork, and structured legal argumentation."
    }
  ],
  achievements: [
    "Secured Top 10 Rank in 33rd Advocate License Examination, Nepal Bar Council (2025)"
  ],
  skills: [
    "Drafting of pleadings, petitions, and applications",
    "Drafting and Documentation Skills",
    "Legal Technology and Tools",
    "Teaching and communication",
    "Research skills",
    "Computer skills: MS Office package (Word, PowerPoint, Excel), email handling, internet research, online teaching tools, Google Classroom, Zoom",
    "Language skills: Fluent in English, Nepali and Hindi"
  ]
};


