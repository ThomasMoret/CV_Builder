import React, { useRef } from "react";
import Button from "./Button";
import PlaceHolder from "../assets/placeholder.png";
import AddPhoto from "../assets/add_photo.png";
import "../styles/personal.css";

const Personal = () => {
  const fileInput = useRef(null);
  const [image, setImage] = React.useState(PlaceHolder);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [editMode, setEditMode] = React.useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="Personal">
      <div className="Personal__image">
        {editMode ? (
          <div className="Personal__image__edit">
            <img
              src={image}
              alt="profile"
              className="Personal__image__edit--img"
            />
            <input
              type="file"
              ref={fileInput}
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="Personal__image__edit--add__container">
              <img
                src={AddPhoto}
                alt="add photo"
                className="Personal__image__edit--add"
                onClick={() => fileInput.current.click()}
              />
            </div>
          </div>
        ) : (
          <img src={image} alt="profile" className="Personal__image__img" />
        )}
      </div>
      <div className="Personal__details">
        <h2>Personal Details</h2>
        <hr />
        <div className="Personal__details__email">
          {editMode ? (
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your Email"
              className="Personal__details__email--input"
            />
          ) : (
            <h3>{email < 1 ? "Your Email" : email}</h3>
          )}
        </div>
        <div className="Personal__details__phone">
          {editMode ? (
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Your Phone"
              className="Personal__details__phone--input"
            />
          ) : (
            <h3>{phone < 1 ? "Your Phone" : phone}</h3>
          )}
        </div>
        <div className="Personal__details__address">
          {editMode ? (
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Your Address"
              className="Personal__details__address--input"
            />
          ) : (
            <h3>{address < 1 ? "Your Address" : address}</h3>
          )}
        </div>
      </div>
      <div className="Personal__buttons">
        {editMode ? (
          <Button onClick={handleSaveClick} text="SAVE" className="save" />
        ) : (
          <Button onClick={handleEditClick} text="EDIT" className="edit" />
        )}
      </div>
    </div>
  );
};

export default Personal;
