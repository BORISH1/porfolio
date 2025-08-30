import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Borish",
  lastName: "Ningombam",
  name: `Ningombam Borish Singh`,
  role: "Full Stack Developer",
  avatar: "/images/a.jpg",
  email: "borishningombam@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Manipuri"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Borish1",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ningombam-borish-singh-70b34a273/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@borishningombamhpls",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design-minded Code-driven Always learning</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Borish.dev</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Borish, a full stack developer at Borish.dev
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/borish-ningombam-7sdxtx",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Borish is a Tamil Nadu–based full-stack developer with a passion for turning complex ideas into intuitive digital experiences. His work spans responsive web apps, backend systems, and the intersection of design and engineering. Whether building client projects or experimenting after hours, he thrives on crafting solutions that are both elegant and scalable.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Anshos Tech",
        timeframe: "2025 March - Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Redesigned the UI/UX for my project platform, which improved user engagement by 20% 
  and made the site load 30% faster.
          </>,
          <>
             Integrated AI tools into my workflow, helping me iterate designs 50% faster and 
  deliver results more efficiently.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "achievenet image",
            width: 16,
            height: 9,
          },
        ],
      },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple platforms, improving
      //       design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line, contributing to a 15% increase
      //       in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Rohini College of Engineering and Technology",
        description: <>Computer Science and Engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
  title: "Next.js",
  description: (
    <>I can build full-stack web applications in Next.js with clean UI and optimized performance.</>
  ),
  tags: [
    {
      name: "Next.js",
      icon: "nextjs",
    },
  ],
  images: [
    {
      src: "/images/projects/project-01/cover-03.jpg",
      alt: "Next.js project preview",
      width: 16,
      height: 9,
    },
    {
      src: "/images/projects/project-01/cover-01.jpg",
      alt: "Next.js dashboard showcase",
      width: 16,
      height: 9,
    },
  ],
}
,
      {
  title: "PostgreSQL",
  description: (
    <>Designing and managing relational databases with PostgreSQL, including stored procedures and optimized queries.</>
  ),
  tags: [
    {
      name: "SQL",
      icon: "sql",
    },
    {
      name: "PostgreSQL",
      icon: "postgresql",
    },
    {
      name: "Database Design",
      icon: "database",
    },
  ],
  images: [
    {
      src: "/images/projects/project-01/cover-04.jpg",
      alt: "PostgreSQL database design",
      width: 16,
      height: 9,
    },
  ],
}
,  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
