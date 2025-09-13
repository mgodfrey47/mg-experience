const portfolioItems = [
  {
    id: 1,
    title: "Concertim",
    image: "carbon_leaderboard.png",
    description: "HPC management site with server rack visualisations.",
    contribution: `
      Responsible for interface design. Worked with a small team to implement,
      where I concentrated on front-end features.
    `,
    languages: "Ruby on Rails, Three.js",
    links: {},
  },
  {
    id: 2,
    title: "OpenFlightHPC",
    image: "openflighthpc.png",
    description: "Website featuring documentation and information for open source HPC software.",
    contribution: "Interface design and implementation.",
    languages: "MkDocs, HTML, CSS, JavaScript",
    links: {
      site: "https://www.openflighthpc.org",
      github: "https://github.com/openflighthpc/docs.openflighthpc.org",
      pr: "https://github.com/openflighthpc/docs.openflighthpc.org/pull/10",
    },
  },
  {
    id: 3,
    title: "Carbon leaderboard",
    image: "carbon_leaderboard.png",
    description: "Website that shows the relative environmental impact of servers.",
    contribution: `
      Most interface design and front-end implementation, including the front page and data entry instructions.
    `,
    languages: "Ruby on Rails",
    links: {
      site: "https://leaderboard.openflighthpc.org/",
      github: "https://github.com/openflighthpc/carbon-leaderboard",
      pr: "https://github.com/openflighthpc/carbon-leaderboard/pull/13",
    },
  },
  {
    id: 4,
    title: "Flight Web Suite redesign",
    image: "flight_web_suite.png",
    description: "UX revamp of application suite that allows connecting to HPC systems in browser.",
    contribution: `
      Interface redesign and implementation. Graphic design.
    `,
    languages: "React, Nanoc, Ruby",
    links: {
      github: "https://github.com/openflighthpc/flight-landing-page",
      pr: "https://github.com/openflighthpc/flight-desktop-webapp/pull/102",
    },
  },
  {
    id: 5,
    title: "OPM data acquisition",
    image: "opm_data_acquisition.png",
    description: "GUI for viewing and recording data from functional neuroimaging sensors.",
    contribution: `
      Interface design and implementation.
    `,
    languages: "MATLAB",
    links: {
      github: "https://github.com/mgodfrey47/opm-data-acquisition",
    },
  },
  {
    id: 6,
    title: "Portfolio website",
    image: "carbon_leaderboard.png",
    description: "This very website, showing a portfolio of my software development experience.",
    contribution: `
      Design and implementation.
    `,
    languages: "Next.js, React",
    links: {
      site: "https://mg-experience.vercel.app/",
      github: "https://github.com/mgodfrey47/mg-experience",
    },
  },
];

export default portfolioItems;
