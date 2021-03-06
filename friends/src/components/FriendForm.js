import React from "react";
import "./FriendForm.css";

const FriendForm = props => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={props.handleInputChange}
        value={props.name}
        required
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        onChange={props.handleInputChange}
        value={props.age}
        required
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={props.handleInputChange}
        value={props.email}
        required
      />
      <button className="button" type="submit" onClick={props.addFriend}>
        Add Rainbow Friend
      </button>
    </form>
  );
};

export default FriendForm;
