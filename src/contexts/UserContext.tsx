import React, { useState, useMemo, FC } from "react";
import { User } from "../lib/types";
import { mockUser } from "../lib/mockData";

interface UserContextProps {
  user: User | null;
  setUser(value: User): void;
}

export const UserContext = React.createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(mockUser);

  return useMemo(
    () => (
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    ),
    [user]
  );
};
