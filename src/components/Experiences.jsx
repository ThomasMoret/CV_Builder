import React from "react";
import Button from "./Button";
import "../styles/experiences.css";

const Experiences = () => {
  const [editMode, setEditMode] = React.useState(false);
  const [experiences, setExperiences] = React.useState([
    {
      id: 1,
      title: "Job title",
      company: "Company name",
      start: "Start date",
      end: "End date",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  const handleAddClick = () => {
    setExperiences([
      ...experiences,
      {
        id: experiences.length + 1,
        title: "Job title",
        company: "Company name",
        start: "Start date",
        end: "End date",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
    ]);
  };

  const handleDeleteClick = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };

  const handleTitleChange = (event, id) => {
    const newExperiences = experiences.map((experience) => {
      if (experience.id === id) {
        experience.title = event.target.value;
      }
      return experience;
    });
    setExperiences(newExperiences);
  };

  const handleCompanyChange = (event, id) => {
    const newExperiences = experiences.map((experience) => {
      if (experience.id === id) {
        experience.company = event.target.value;
      }
      return experience;
    });
    setExperiences(newExperiences);
  };

  const handleStartChange = (event, id) => {
    const newExperiences = experiences.map((experience) => {
      if (experience.id === id) {
        experience.start = event.target.value;
      }
      return experience;
    });
    setExperiences(newExperiences);
  };

  const handleEndChange = (event, id) => {
    const newExperiences = experiences.map((experience) => {
      if (experience.id === id) {
        experience.end = event.target.value;
      }
      return experience;
    });
    setExperiences(newExperiences);
  };

  const handleDescriptionChange = (event, id) => {
    const newExperiences = experiences.map((experience) => {
      if (experience.id === id) {
        experience.description = event.target.value;
      }
      return experience;
    });
    setExperiences(newExperiences);
  };

  return (
    <div className="Experiences">
      <div className="Experiences__title">
        <h2 className="title mt__20">Experiences</h2>
        <hr />
      </div>
      <div className="Experiences__list">
        {experiences.map((experience) => (
          <div key={experience.id} className="Experiences__list__item">
            <div className="Experiences__list__item__left">
              <div className="Experiences__list__item__date">
                {editMode ? (
                  <>
                    <input
                      type="text"
                      value={experience.start}
                      onChange={(event) =>
                        handleStartChange(event, experience.id)
                      }
                      placeholder="Start"
                      disabled={!editMode}
                      className="start-date medium__font"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      value={experience.end}
                      onChange={(event) =>
                        handleEndChange(event, experience.id)
                      }
                      placeholder="End"
                      disabled={!editMode}
                      className="end-date medium__font"
                    />
                  </>
                ) : (
                  <p className="medium__font">
                    {experience.start + " - " + experience.end}
                  </p>
                )}
              </div>
              <div className="Experiences__list__item__title">
                {editMode ? (
                  <input
                    type="text"
                    value={experience.title}
                    onChange={(event) =>
                      handleTitleChange(event, experience.id)
                    }
                    placeholder="Title"
                    disabled={!editMode}
                    className="medium__font"
                  />
                ) : (
                  <h3 className="medium__font">{experience.title}</h3>
                )}
              </div>
            </div>
            <div className="Experiences__list__item__right">
              <div className="Experiences__list__item__company">
                {editMode ? (
                  <input
                    type="text"
                    value={experience.company}
                    onChange={(event) =>
                      handleCompanyChange(event, experience.id)
                    }
                    placeholder="Company"
                    disabled={!editMode}
                    className="medium__font"
                  />
                ) : (
                  <h4 className="medium__font">{experience.company}</h4>
                )}
              </div>
              {editMode ? (
                <textarea
                  value={experience.description}
                  onChange={(event) =>
                    handleDescriptionChange(event, experience.id)
                  }
                  placeholder="Description"
                  disabled={!editMode}
                  className="small__font job-description"
                />
              ) : (
                <p className="small__font">{experience.description}</p>
              )}
            </div>

            <div className="Experiences__list__item__delete">
              <Button
                type="button"
                text="Delete"
                className="delete"
                onClick={() => handleDeleteClick(experience.id)}
              />
            </div>
          </div>
        ))}
      </div>
      {editMode ? (
        <Button
          type="button"
          text="SAVE"
          onClick={handleSaveClick}
          className="save"
        />
      ) : (
        <Button
          type="button"
          text="EDIT"
          onClick={handleEditClick}
          className="edit"
        />
      )}
      {editMode && (
        <Button
          type="button"
          text="ADD"
          onClick={handleAddClick}
          className="add"
        />
      )}
    </div>
  );
};

export default Experiences;
