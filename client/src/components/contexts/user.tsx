// Package imports
import React, { createContext, useContext, useState } from 'react';

interface User {
  location: string;
  salary: number;
}

interface Props {
  children: React.ReactNode;
}

const defaultUser: User = {
  location: 'London',
  salary: 20_000,
};

const Context = createContext<[User, React.Dispatch<User>]>([defaultUser, (): void => {}]);

export const UserProvider: React.FC<Props> = ({ children }) => {
  // States
  const [user, setUser] = useState<User>({
    location: 'London',
    salary: 20_000,
  });

  return <Context.Provider value={[user, setUser]}>{children}</Context.Provider>;
};

export function useUserContext() {
  return useContext(Context);
}


