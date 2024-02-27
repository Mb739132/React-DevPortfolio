import React from "react";
import Project from "../../components/Project";
import weatherornot from "../../assets/img/weatherornot.png";
import famfin from "../../assets/img/famfin.png";
import brewmap from "../../assets/img/brewmap.jpeg";
import budgettracker from "../../assets/img/budgettracker.png";
import techblog from "../../assets/img/techblog.png";
import notetaker from "../../assets/img/notetaker.png";
import weatherdashboard from "../../assets/img/weatherdashboard.png";
import workdayscheduler from "../../assets/img/workdayscheduler.png";

const Portfolio = () => {
  const projectList = [
    // Project objects
  ];

  return (
    <div>
      <div className="flex-row">
        {projectList.map((singleProject, index) => (
          <Project key={index} singleProject={singleProject} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;