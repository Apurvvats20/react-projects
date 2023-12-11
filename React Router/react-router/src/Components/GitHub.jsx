import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GitHub() {
  const { username } = useParams();
  const [followers, setFollowers] = useState("No data to display");
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setFollowers(data));
  }, [username]);

  return (
    <>
      <div
        className="bg-black text-white"
        style={{ width: "80%", margin: "auto", borderRadius: "10px" }}
      >
        <div className="text-center">
          GITHUB FOLLOWERS : {followers.followers}{" "}
        </div>
        <img
          style={{ margin: "auto", borderRadius: "5px", padding: "5px" }}
          src={`${followers.avatar_url}`}
          alt="github profile pic"
        ></img>
      </div>
    </>
  );
}

export default GitHub;
