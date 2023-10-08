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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Lorem ipsum ",
      icon: web,
    },
    {
      title: "Lorem ipsum ",
      icon: mobile,
    },
    {
      title: "Lorem ipsum ",
      icon: backend,
    },
    {
      title: "Lorem ipsum ",
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Lorem ipsum ",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Eget nunc lobortis mattis aliquam faucibus purus in massa tempor.",
        " Pulvinar proin gravida hendrerit lectus.",
        "Amet venenatis urna cursus eget nunc scelerisque viverra. ",
        "Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. ",
      ],
    },
    {
      title: "Neque gravida",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Eget nunc lobortis mattis aliquam faucibus purus in massa tempor.",
        " Pulvinar proin gravida hendrerit lectus.",
        "Amet venenatis urna cursus eget nunc scelerisque viverra. ",
        "Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. ",
      ],
    },
    {
      title: "Sodales ut eu sem",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Eget nunc lobortis mattis aliquam faucibus purus in massa tempor.",
        " Pulvinar proin gravida hendrerit lectus.",
        "Amet venenatis urna cursus eget nunc scelerisque viverra. ",
        "Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. ",
      ],
    },
    {
      title: "Tempor orci",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Eget nunc lobortis mattis aliquam faucibus purus in massa tempor.",
        " Pulvinar proin gravida hendrerit lectus.",
        "Amet venenatis urna cursus eget nunc scelerisque viverra. ",
        "Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. ",
      ],
    },
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
      name: "Portfolio-Website",
      description:
        "3D portfolio website using ThreeJS, React Three Fiber,TailwindCSS, Framer Motion..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "",
    },
    {
      name: "Coming soon",
      description:
        "Will be updated soon...",
      tags: [
        {
          name: "viverra",
          color: "blue-text-gradient",
        },
        {
          name: "risus",
          color: "green-text-gradient",
        },
        {
          name: "vitae",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "",
    },
    {
      name: "Coming soon",
      description:
        "Will be updated soon ....",
      tags: [
        {
          name: "vitae",
          color: "blue-text-gradient",
        },
        {
          name: "faucibus",
          color: "green-text-gradient",
        },
        {
          name: "purus ",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };