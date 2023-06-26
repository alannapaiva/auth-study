import { createContext, ReactNode } from "react";

import { iUser } from "@/config/types";
import { useStorage } from "@/hooks/useStorage";

interface iUserContext {
  user: iUser;
  setUser: (user: iUser) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useStorage<iUser>("user", {} as iUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
