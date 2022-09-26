import audiophileHero from "../../public/image-hero.webp"

export const data = [
  {
    id: "01",
    tilt: "left",
    title: "Audiophile E-Commerce Website",
    subTitle: "A fullstack React and Express application",
    projectImage: "/public/image-hero.webp",
    role: "Frontend Develoepr",
    context: "Frontend Mentor Challenge",
    period: "2022",

    introduction: {
      description:
        "A self-sufficient settlement, where you can spend your time with no hurry or constraint. Tourists, who nowadays are more and more desirous to discover landscapes, scents and natural flavours, find in La Francesca the ideal place for a stay in all seasons.",
      projectLink: "https://audiophile-project-ajyn5ex9o-nuhali.vercel.app",
      svgImage: ""
    },
    description: {
      title: "audiophile",
      subTitle: `
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
        descriptionImage: "",
        colors: [
            {name: "orange",color: "#d87D4A"},
            {name: "faded-orange",color: "#fbaf85"},
            {name: "black",color: "#0E0E0E"},
            {name: "grey",color: "#ededed"},
            {name: "white",color: "#fafafa"},
        ],
        designImage: ""
    },
  },
];

export default data;
