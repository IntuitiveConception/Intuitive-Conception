import React from "react";

const achievementsContent = [
  { title: "5", subTitle1: "years of", subTitle2: " dev experience" },
  { title: "life", subTitle1: "long", subTitle2: "learning" },
  { title: "Many", subTitle1: "Happy", subTitle2: "customers" },
  { title: "great", subTitle1: "coworker", subTitle2: "" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
