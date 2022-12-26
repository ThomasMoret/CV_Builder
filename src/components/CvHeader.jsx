import React from "react";
import Button from "./Button";
import "../styles/cvheader.css";

const CvHeader = () => {
  const [name, setName] = React.useState("Your Name");
  const [jobTitle, setJobTitle] = React.useState("Your Job Title");
  const [editMode, setEditMode] = React.useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  return (
    <div className="Cv_header">
      <div className="Cv_header__name">
        {editMode ? (
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Your Name"
            className="Cv_header__name--input"
          />
        ) : (
          <h1>{name < 1 ? "Your Name" : name}</h1>
        )}
      </div>
      <div className="Cv_header__job">
        {editMode ? (
          <input
            type="text"
            value={jobTitle}
            onChange={handleJobTitleChange}
            placeholder="Your Job Title"
            className="Cv_header__job--input"
          />
        ) : (
          <h2>{jobTitle < 1 ? "Your Job Title" : jobTitle}</h2>
        )}
      </div>
      <div className="Cv_header__buttons">
        {editMode ? (
          <Button onClick={handleSaveClick} text="SAVE" className="save" />
        ) : (
          <Button onClick={handleEditClick} text="EDIT" className="edit" />
        )}
      </div>
    </div>
  );
};

export default CvHeader;
