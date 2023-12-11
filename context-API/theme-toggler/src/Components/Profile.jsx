import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) return <div>Please login</div>;
  return <div>Welcome {user.username}</div>;
}

export default Profile;
