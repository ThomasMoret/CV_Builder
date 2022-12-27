import React from "react";
import Button from "./Button";
import "../styles/skills.css";

const Skills = () => {
  const [editMode, setEditMode] = React.useState(false);
  const [skills, setSkills] = React.useState([]);
  const [skill, setSkill] = React.useState("");

  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };
  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    setSkills([...skills, skill]);
    setSkill("");
  };

  const handleDeleteClick = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  return (
    <div className="Skills">
      <div className="Skills__title">
        <h2>Skills</h2>
        <hr />
      </div>
      <div className="Skills__list">
        {skills.map((skill, index) => (
          <div className="Skills__list__item" key={index}>
            <h3>{skill < 1 ? "Add a skill" : "- " + skill}</h3>
            <Button
              onClick={() => handleDeleteClick(index)}
              text="DELETE"
              className="delete"
            />
          </div>
        ))}
      </div>
      <div className="Skills__input">
        {editMode ? (
          <input
            type="text"
            value={skill}
            onChange={handleSkillChange}
            placeholder="Add a skill"
            className="Skills__input--input"
          />
        ) : null}
      </div>
      <div className="Skills__buttons">
        {editMode ? (
          <Button onClick={handleSaveClick} text="SAVE" className="save" />
        ) : (
          <Button onClick={handleEditClick} text="EDIT" className="edit" />
        )}
      </div>
    </div>
  );
};

export default Skills;
