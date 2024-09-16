import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: " Full-Stack Developer",
    compnayName: "Intuitive Conception",
    details: `  Freelance as full-stack developer on
        Django, React, AWS`,
  },
  {
    year: "2018 - 2021",
    position: " Technical Manager",
    compnayName: "Vega",
    details: `Python developer in
        working app, Mechanical and electrical maintenance, Automation engineer`,
  },
  {
    year: "2016 - 2018",
    position: "Processe technician in water treatment",
    compnayName: "Mesachimie",
    details: `Automation engineer, Industrial maintenance`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
