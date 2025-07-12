import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I am now seasoned in building highly scalable and efficient systems from scratch, using technologies like Node.JS, MongoDB, Express, Golang, Redis and Kafka. I also have forst hand experience of modern front-end tools like ReactJS. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including Node.js, Express, MongoDB, NestJS, Redis, Kafka, Airflow, AWS SQS, ReactJS and many more. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and learning new technologies.`;

export const EDUCATION = [
  {
    year: '2019-2023',
    degree: 'Bachelor of Technology',
    institution: 'Indian Institute of Technology Jammu, J&K',
    description: `Graduated with a Majors in Chemical Engineering and Minors in Computer Science and Engineering. 
    Developed a strong foundation in software development, algorithms, and data structures. Participated in various coding competitions and hackathons, enhancing problem-solving skills and teamwork.`,
  },
  {
    year: '2017-2018',
    degree: 'Senior Secondary School',
    institution: 'SSDEC, Kanpur, UP',
    description: `Completed Senior Secondary education with a focus on Science and Mathematics. 
    Developed analytical skills and a strong understanding of fundamental concepts in physics, chemistry, and mathematics.
    Cleared JEE Mains and Advanced, securing admission to IIT Jammu.`,
  },
];

export const EXPERIENCES = [
  {
    year: 'June 2023 - Present',
    role: 'Software Development Engineer',
    company: 'PhysicsWallah',
    description: `Currently working as a Backend Developer at PhysicsWallah, where I am responsible for developing and maintaining scalable web applications.
    My role involves designing RESTful APIs, optimizing database queries, and ensuring high performance and responsiveness of applications.
    I collaborate with cross-functional teams to deliver high-quality software solutions that meet business requirements and enhance user experience.`,
    technologies: [
      'Node.js',
      'Express.js',
      'Nest.js',
      'MongoDB',
      'Redis',
      'Kafka',
      'AWS',
      'Airflow',
      'Firebase',
    ],
  },
  {
    year: 'May 2022 - August 2022',
    role: 'Software Development Intern',
    company: 'Larsen & Toubro Infotech',
    description: `Worked as a Software Development Intern at Larsen & Toubro Infotech, where I contributed to the development of a software for client use.
    My responsibilities included implementing new features, fixing bugs, and improving the overall performance of the application.
    I gained hands-on experience in full stack development, working with technologies such as Spring Boot and Angular.`,
    technologies: ['Java', 'Spring Boot', 'Angular'],
  },
];

export const PROJECTS = [
  {
    title: 'Refer and Earn System',
    image: project1,
    description:
      'Built a robust Refer and Earn system for PhysicsWallah, enabling users to earn rewards by referring friends with features like referral tracking, reward management, and user notifications. Used MongoDB for data storage and NestJS for backend development. Redis was used for caching and locking, ensuring high performance and scalability. Used Airflow for scheduling retries for pending payouts. Generated 60Cr+ revenue within just 4 months of launch in March 2025. Sustained a peak traffic of ~800rps during the referral campaigns.',
    technologies: ['NestJS', 'MongoDB', 'Redis', 'Airflow'],
  },
  {
    title: 'In House Push Notification System',
    image: project2,
    description:
      'Developed an in-house notification system for PhysicsWallah, allowing real-time communication with users. Capable of sending personalized notifications based on user preferences and behaviors. Implemented using NestJS for the backend architechture, MongoDB for data storage and Firebase for Pub/Sub messaging. Scaled for a user base of over 1 million active users receiving notifications at a given time. Articulated scheduled jobs using Airflow to ensure timely delivery of notifications.',
    technologies: ['NestJS', 'MongoDB', 'Firebase', 'Airflow'],
  },
  {
    title: 'Customer Lifecycle Management System',
    image: project3,
    description:
      'Built a comprehensive Customer Lifecycle Management System for PhysicsWallah, enabling efficient management of user interactions and data. The system includes features like user segmentation, behavior tracking, and personalized communication. Utilized NestJS for backend development, MongoDB for data storage, and Redis for caching. Used Kafka for real-time data processing and event-driven architecture. Built to handle peak traffic with user leads coming at a scale of 500-700 requests per second. Partenered with external vendors like Moengage and LeadSquared for the lead analysis and management.',
    technologies: ['NestJS', 'MongoDB', 'Redis', 'Kafka', 'AWS SQS'],
  }
];

export const CONTACT = {
  address: 'Kanpur, Uttar Pradesh, India',
  phoneNo: '+91 9149918535',
  email: 'tshivanshu9@gmail.com',
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/shivanshu-tripathi-7a043327b/',
  github: 'https://github.com/tshivanshu9/portfolio',
};
