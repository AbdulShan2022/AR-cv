
import {Briefcase , GraduationCap, Wrench} from 'lucide-react';
export interface resumeProps {
  name: string;
  title: string;
  email: {
    address: string;
    icon: React.ReactNode;
  };
  linkedin: {
    text: string;
    url: string;
    icon: React.ReactNode;
  };
  github: {
    text: string;
    url: string;
    icon: React.ReactNode;
  };
  summary: string;
  experince: contactProps; 
  education: contactProps;
  technicalSkills: {
    icon: React.ReactNode;
    title: string;
    skills: skills;
  };
  contact: {
    icon: React.ReactNode;
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

export interface contactProps {
    icon: React.ReactNode;
    title: string;
    lists: list[]; 
  };


interface skills {
  languages: string[],
  technologies: string[],

}

interface list {
    place: string,
    title: string,
    from?: string,
    to?: string,
    overview?: string,
    key_responsibilities?: string[],
    achievements?: string[],
}
interface school {
    school: string,
    degree: string,
}

export const resume : resumeProps = {
    name: 'Abdul Rahman',
    title: 'Senior Software Engineer',
    email: {address: 'abdulrahman.shanwar@outlook.com', icon: (
      <i className="fas fa-envelope"></i>
    )},
    linkedin: {
      text: 'Abdul Rahman',
      url: 'https://www.linkedin.com/in/abdul-r-mhd/',
      icon: (
        <i className="fab fa-linkedin"></i>
      )
    },
    github: {
      text: 'abdulrahman.shanwar',
      url: 'https://github.com/AbdulShan2022',
      icon: (
        <i className="fab fa-github"></i>
      )
    },
    summary:
      'Experienced Frontend Engineer with 5+ years of expertise in developing dynamic and scalable web applications using React and Next.js. Proficient in production deployments in AWS and adept at using AWS Session Manager to ensure seamless and reliable deployments. Skilled in modern development practices, ensuring optimal performance and exceptional user experiences. Strong collaborator in Agile environments with a commitment to continuous improvement and code quality.',
    experince: {
      icon: (
          <Briefcase size={24} className="mr-2" />
      ),
      title: 'Experience',
      lists: [
        {
          place: 'Accendo Technologies (Malaysia - Kuala Lumpur)',
          title: 'Senior Front End Engineer',
          from: 'Jan. 2020',
          to: '- Present',
          overview:
            'Lead the development of high-performance web applications, mentor junior developers, and ensure the delivery of seamless user experiences through advanced front-end technologies and best practices.',
          key_responsibilities: [
            'Code, verify, test, document, amend and refactor complex programs/scripts and integration software services, ensuring high performance and maintainability by applying SOLID, DRY and KISS principles.',
            'Coordinated with cross-functional teams to plan and execute projects effectively.',
            'Mentor and advise team members on modern best practices in software engineering.',
            'Actively engage in peer code reviews of my work and take the lead in reviewing the code of my colleagues to improve its quality across the team.',
          ],
          achievements: [
            'Built and maintained an in-house React components library, promoting reusable code and streamlined development processes.',
            'Developed an employee portal module featuring pages for personal details, job details, performance and assessments, career development, and skills analysis.',
            'Successfully integrated Tableau for advanced data analysis and visualization within our in-house application.',
            'Applied translation feature, ensuring application is accessible to a global audience.',
          ],
        },
        {
          place: 'Freelance',
          title: 'Front End Engineer',
          from: 'Sep. 2018',
          to: '- Dec. 2019',
          overview:
            'Assist in developing interactive web applications, implementing UI designs, and contribute to enhanced functionality and user experience.',
          key_responsibilities: [
            'Develop and maintain web applications using React.js.',
            'Troubleshoot and debug issues in a timely manner.',
          ],
        },
      ],
    },
    education: {
      icon: (
        <GraduationCap size={24} className="mr-2" />
      ),
      title: 'Education',
      lists: [
        {
          place: 'UNIVERSITY TENAGA NASIONAL (UNITEN - Malaysia)',
          title: 'Master in Telecommunication Engineering',
        },
        {
          place: 'UNIVERSITY OF KALAMOON',
          title: 'Bachelor in Electronics and Communication Engineering',
        },
      ],
    },
    technicalSkills: {
      icon: (
        <Wrench size={24} className="mr-2" />
      ),
      title: 'Technical Skills',
      skills: {
        languages: [
          'React',
          'Next.js',
          'Node.js',
          'JavaScript',
          'Redux',
          'Mobx',
          'Tailwind',
          'HTML',
          'CSS',
        ],
        technologies: [
          'Git',
          'GitHub Actions',
          'AWS',
          'Jest',
          'React Testing Librar',
          'Agile framework',
          'Jira',
          'Performance Optimization (Code Splitting, Lazy Loading)',
        ],
      },
    },
    contact: {
      icon: (
        <span className="fa-stack fa-xs">
          <i className="fas fa-circle fa-stack-2x"></i>
          <i className="fas fa-address-card fa-stack-1x fa-inverse"></i>
        </span>
      ),
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
    },
  };