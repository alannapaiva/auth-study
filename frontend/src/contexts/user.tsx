import { useState, createContext, ReactNode } from "react";

import { iUser } from "@/config/types";
import { useStorage } from "@/hooks/useStorage";

interface iUserContext {
  user: iUser;
  users?: iUser[];
  userLogging: boolean;
  adminLogging: boolean;
  setUser: (user: iUser) => void;
  setUserLogging: (state: boolean) => void;
  setAdminLogging: (state: boolean) => void;
  getUsers: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useStorage<iUser>("user", {} as iUser);
  const [userLogging, setUserLogging ] =  useStorage("logged", false);
  const [adminLogging, setAdminLogging] = useStorage("logged", false);
  const [users, setUsers] = useState<iUser[]>();
 
  function getUsers() {
    try {
      const response = fetch("http://localhost:5000/users/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      }).then((response) => response.json())
      .then((user) => setUsers(user))
    } catch (error) {
      console.error("Erro:", error);
    }
  }  

  return (
    <UserContext.Provider value={{ user, setUser, adminLogging, setAdminLogging, userLogging, setUserLogging, users, getUsers }}>
      {children}
    </UserContext.Provider>
  );
};
