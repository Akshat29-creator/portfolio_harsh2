const config = {
  title: "Harsh Gupta | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Harsh Gupta, a full-stack developer specializing in modern web and mobile applications, interactive experiences, and creative engineering. Let's build something amazing together!",
    short:
      "Discover the portfolio of Harsh Gupta, a full-stack developer building modern web and mobile applications.",
  },
  keywords: [
    "Harsh Gupta",
    "portfolio",
    "full-stack developer",
    "web development",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Framer Motion",
  ],
  author: "Harsh Gupta",
  email: "harsh370hg@gmail.com",
  site: "https://harshgupta.dev",

  // for github stars button
  githubUsername: "harshfiu",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/harshfiu",
    instagram: "",
    facebook: "",
    github: "https://github.com/harshfiu",
  },
};
export { config };
