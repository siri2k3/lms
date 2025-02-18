import React from "react";

const Profile = ({ user }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
