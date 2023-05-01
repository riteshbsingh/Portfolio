import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import Tooltip from "@mui/material/Tooltip";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "workExperience"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  experiences.sort(function (a, b) {
    return - (a.id - b.id || a.name.localeCompare(b.name));
  });

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img style={{ backgroundColor: 'white' }} src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            // <Tooltip
            //   componentsProps={{
            //     tooltip: {
            //       sx: {
            //         backgroundColor: "#fff",
            //         color: "#000",
            //         fontSize: "1rem",
            //         fontWeight: "500",
            //         border: "1px solid #cfc7c7",
            //         minWidth: "450px",
            //       },
            //     },
            //     arrow: {
            //       sx: {
            //         color: "#cfc7c7",
            //       },
            //     },
            //   }}
            //   id={experience?.name}
            //   title={experience?.desc}
            //   arrow
            // >
              <motion.div className="app__skills-exp-item">
                <div className="app__skills-exp-year">
                  <img
                    style={{ width: "150px", height: "90px", marginTop: '5px' }}
                    src={urlFor(experience?.image)}
                    alt="img"
                  />
                </div>
                <motion.div className="app__skills-exp-works">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={experience?.name}
                  >
                    <h4 className="bold-text">{experience?.name}</h4>
                    <p className="bold-text">{experience?.time} </p>
                  <p dangerouslySetInnerHTML={{ __html: experience.desc }}></p>
                  </motion.div>
                </motion.div>
              </motion.div>
            // </Tooltip>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),

  "skills",
  "app__whitebg"
);
