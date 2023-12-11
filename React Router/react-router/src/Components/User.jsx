import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div>
      <h1 className="text-center m-10 bg-black text-white p-10 text-size-10 rounded-2xl text-2xl">
        USER ID : {userid}
      </h1>
    </div>
  );
}

export default User;
