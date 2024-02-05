import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dhuniSoftwareLogo,
  insightWorkshopLogo,
  digitalValleyLogo,
  dhuniSoftwareWhiteLogo,
  antd,
  mui,
  shadcnUi,
  github,
  bitbucket,
  vocalpanda_homePage,
  dhtech_homePage,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Tech Mentor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "bitbucket",
    icon: bitbucket,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "antd",
    icon: antd,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "shadcn-ui",
    icon: shadcnUi,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "The Digital Valley",
    icon: digitalValleyLogo,
    iconBg: "#ffffff",
    date: "April 2019 - December 2020",
    points: [
      "Proficient in React and Next.js for frontend development",
      "Converted complex Figma designs into meticulously written code",
      "Worked collaboratively with design teams to implement visual and interactive elements",
      "Enhanced web applications for optimal speed and performance",
      "Integrated third-party APIs to augment functionality",
      "Played a key role in establishing design systems for consistency",
      "Utilized Git for version control in collaborative projects",
      "Actively championed the adoption of Agile methodologies",
      "And more...",
    ],
    url: "https://thedgtalvalley.com/",
  },
  {
    title: "Software Engineer",
    company_name: "Insight Workshop.",
    icon: insightWorkshopLogo,
    iconBg: "#ffffff",
    date: "December 2020 - February 2022",
    points: [
      "Backend development with Node.js, utilizing REST API and Apollo GraphQL",
      "Frontend expertise in React and Next.js",
      "Translated intricate Figma designs into meticulously crafted code",
      "Collaborated with design teams for visual and interactive elements",
      "Optimized web applications for speed and performance",
      "Integrated third-party APIs to enhance functionality",
      "Contributed to creating design systems for consistency",
      "Mentored and guided junior developers",
      "Worked with version control systems like Git in collaborative projects",
      "Proficient use of AWS for in-house and service product deployments",
      "Actively contributed to the adoption of Agile methodologies.",
      "and more...",
    ],
    url: "https://insightworkshop.io/",
  },
  {
    title: "Sr.Software Engineer",
    company_name: "Dhuni Software",
    icon: dhuniSoftwareLogo,
    iconBg: "#E6DEDD",
    date: " February 2022 - present",
    points:  [
      "Developing and maintaining web applications using React.js, Svelte, and other related technologies.",
      "Designing, developing, and maintaining software applications, systems, or components according to specifications and requirements.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Integrating third-party APIs and services to enhance software functionality.",
      "Actively contributing to the adoption of Agile methodologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Mentoring junior developers to foster their professional growth.",
      "Working on R&D projects for innovative product development.",
      "Designing project architecture for frontend applications.",
      "Leading frontend development teams.",
      "Utilizing React Native for cross-platform mobile application development.",
      "Embracing Agile and other software development methodologies to facilitate iterative and incremental development, ensuring rapid and adaptable software delivery.",
      "Writing clean, efficient, and maintainable code.",
      "And more...",
    ],
    url: "https://www.dhunitech.io/",
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VocalPanda",
    description:
      "Web-based platform that allows users to search job, and apply for their dream job from various providers, providing a convenient and efficient solution for job finders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      },
      {
        name: "SEO",
        color: "pink-text-gradient",
      },
    ],
    image: vocalpanda_homePage,
    source_code_link: "https://www.vocalpanda.com/",
  },
  {
    name: "D&H",
    description:
      "Web application to build robust software leveraging Artificial Intelligence to provide efficient and accurate solutions to industries confronted with complex regulations. D&H Technologies focuses on the Food and Beverage industry worldwide and streamlines compliance documentation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: dhtech_homePage,
    source_code_link: "https://www.dhtech.io/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
