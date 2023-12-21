import React from "react";
import UserContext from "./UserContext";

const UserContextProvier = ({ children }) => {
  const [user, setuser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvier;
