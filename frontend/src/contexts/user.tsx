import { useState, createContext, ReactNode } from "react";

import { iUser } from "@/config/types";
import { useStorage } from "@/hooks/useStorage";

interface iUserContext {
  user: iUser;
  userLogging: boolean;
  setUser: (user: iUser) => void;
  setUserLogging: (state: boolean) => void;
  setAdminLogging: (state: boolean) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useStorage<iUser>("user", {} as iUser);
  const [userLogging, setUserLogging ] =  useStorage("logged", false);
  const [adminLogging, setAdminLogging] = useStorage("logged", false);
  return (
    <UserContext.Provider value={{ user, setUser, setAdminLogging, userLogging, setUserLogging }}>
      {children}
    </UserContext.Provider>
  );
};
