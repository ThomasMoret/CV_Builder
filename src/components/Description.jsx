import React from "react";
import Button from "./Button";
import "../styles/description.css";

const Description = () => {
  const [editMode, setEditMode] = React.useState(false);
  const [description, setDescription] = React.useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  return (
    <div className="Description">
      <div className="Description__title">
        <h2 className="title mt__20">Description</h2>
        <hr />
      </div>
      <div className="Description__list">
        {editMode ? (
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Add a description"
            className="Description__list__item__textarea"
          />
        ) : (
          <div className="Description__list__item">
            <p className="small__font mt__10">
              {description < 1
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                : description}
            </p>
          </div>
        )}
      </div>
      <div className="Description__buttons">
        {editMode ? (
          <Button onClick={handleSaveClick} text="SAVE" className="save" />
        ) : (
          <Button onClick={handleEditClick} text="EDIT" className="edit" />
        )}
      </div>
    </div>
  );
};

export default Description;
