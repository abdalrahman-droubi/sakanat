import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserDataContext = createContext();

export default function UserProviderContext({ children }) {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState();

  const userRefresh = () => {
    if (localStorage.getItem("token")) {
      axios
        .get(`http://localhost:5500/api/getUser`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then((response) => {
          if (response.data) {
            setUser(response.data);
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsLoggedIn(false);
    }
  };
  useEffect(() => {
    userRefresh();
  }, []);

  return (
    <>
      {" "}
      <UserDataContext.Provider
        value={{ user, setUser, userRefresh, isLoggedIn }}
      >
        {children}
      </UserDataContext.Provider>
    </>
  );
}
