import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Sebastien", hasColor: "" },
  { meta: "last name", metaInfo: "Genty", hasColor: "" },
  { meta: "Age", metaInfo: "36 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "New Caledonian", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "South Pacific", hasColor: "" },
  { meta: "phone", metaInfo: "+687805423", hasColor: "" },
  { meta: "Email", metaInfo: "sebastien.genty@intuitive-conception.com", hasColor: "" },
  { meta: "langages", metaInfo: "French, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
