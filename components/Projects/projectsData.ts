import audiophileHero from "../../public/image-hero.webp";

export const data = [
  {
    id: 1,
    tilt: "left",
    title: "Audiophile",
    subTitle: "A fullstack React and Express application",
    projectImage: "/audiophile/image-hero.jpeg",
    role: "Frontend Develoepr",
    context: "Frontend Mentor Challenge",
    period: "2022",
    backgroundColor: "#d87D4A",
    backgroundColor1: "#0E0E0E",
    introduction: {
      description:
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      projectLink: "https://audiophile-project-ajyn5ex9o-nuhali.vercel.app",
      svgImage: "/audiophile/pattern-circles.svg",
    },
    description: {
      title: "Audiophile",
      subTitle: "The power of sound",
      body: `
            <p>
            An incredible project from
            <Link href={"wwww.frontendmentors.com"}> Frontendmentors</Link>,
            who provided all the figma designs and assets. I used this project
            to practice my ability to translate designs into pixel perfect
            websites that are viewable on all devices.
            <br />
            <br />
            Some of the really exciting parts of this project was making it a
            full stack application using an <span>Express</span> server and
            <span> MySQL</span> database, I also used <span>Styled Components</span>
            as my main styling tool for the first time in any of my projects.
          </p>
            `,
      descriptionImage: "/audiophile/audiophile-description.png",
      colors: [
        { name: "orange", color: "#d87D4A" },
        { name: "faded-orange", color: "#fbaf85" },
        { name: "black", color: "#0E0E0E" },
        { name: "grey", color: "#ededed" },
        { name: "white", color: "#fafafa" },
      ],
      designArea: true,
      designImage: "/audiophile/audiophile-design.png",
    },
    navigation: {
      type: "next",
      title: "Designo",
      link: "/projects/2",
      accentColor: "#e7816b",
    },
  },
  {
    id: 2,
    tilt: "right",
    title: "Designo",
    subTitle: "Award-winning custom designs and digital branding solutions",
    projectImage: "/designo/designo-project-profile.png",
    role: "Frontend Develoepr",
    context: "Personal Project",
    period: "2022",
    backgroundColor: "#e7816b",
    backgroundColor1: "#0E0E0E",
    introduction: {
      description:
        "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
      projectLink: "https://designo-project-lovat.vercel.app",
      svgImage: "/designo/bg-pattern-hero-home.svg",
    },
    description: {
      title: "Designo",
      subTitle: "Passionate and Resourceful",
      body: `
            <p>
            An incredible project from
            <a href={"wwww.frontendmentors.com"}> Frontendmentors</a>,
            who provided all the figma designs and assets. I used this project
            to practice my ability to translate designs into pixel perfect
            websites that are viewable on all devices.
            <br />
            <br />
            Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
          </p>
            `,
      descriptionImage: "/designo/designo-description-pic.png",
      colors: [
        { name: "peach", color: " #E7816B" },
        { name: "light-peach", color: "#FFAD9B" },
        { name: "dark-grey", color: "#333136" },
        { name: "light-grey", color: " #F1F3F5" },
        { name: "white", color: "#f1f3f5" },
      ],
      designArea: true,
      designImage: "/designo/designo-design-picture.png",
    },
    navigation: {
      type: "next",
      title: "Insanity Gym",
      link: "/projects/3",
      accentColor: "#e65f21",
    },
  },
  {
    id: 3,
    tilt: "left",
    title: "Insanity Gym",
    subTitle: "A website built in HTML, SCSS and JavaScript",
    projectImage: "/insanity/insanity-gym-hero.webp",
    role: "Frontend Develoepr",
    context: "Personal Project",
    period: "2020",
    backgroundColor: "#e65f21",
    backgroundColor1: "#0E0E0E",
    introduction: {
      description:
        "A fully responsive website for an imaginary gym, I used HTML5, SASS/SCSS and Javascript. The icons were taken from the font awesome CDN and used gsap a third party animation library.",
      projectLink: "https://nuhali.github.io/Insanity-Gym--Project1/home.html",
      svgImage: "/insanity/insanity-gym.svg",
    },
    description: {
      title: "Insanity Gym",
      subTitle: "Home of insane gains",
      body: `
            <p>
            Over the course of my studies on frontend development, I would constantly be building websites like this to put new concepts into practice.
            <br />
            <br />
            I used this project to practice my skills in DOM manipulation and was also the first project I used a third party animation library like gsap.
          </p>
            `,
      descriptionImage: "/insanity/insanity-gym-description.webp",
      colors: [
        { name: "insanity-orange", color: "#e65f21" },
        { name: "border-orange", color: "#BF3100" },
        { name: "dark-grey", color: "#3C3C3C" },
        { name: "aubergine", color: "#353132" },
        { name: "black", color: "#00000" },
      ],
      designArea: true,
      designImage: "/insanity/insanity-design.webp",
    },
    navigation: {
      type: "prev",
      link: "/projects/2",
      title: "Designo",
      accentColor: "#e7816b",
    },
  },
];

export default data;
