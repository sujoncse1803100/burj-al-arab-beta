import React, { useContext } from "react";
import { UserContext } from "./../../App";

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="text-center pt-5">
      <img
        style={{ borderRadius: "50%" }}
        src={loggedInUser.photoURL ? loggedInUser.photoURL : ""}
        alt=""
      />
      <h1>{loggedInUser.displayName}</h1>
      <h3>{loggedInUser.email}</h3>
      <button
        onClick={() => setLoggedInUser({})}
        className="btn btn-danger mb-5 mt-5"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
