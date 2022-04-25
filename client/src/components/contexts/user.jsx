// Package imports
import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function UserProvider ({ children }) {
  // States
  const [user, setUser] = useState({
    location: 'London',
    salary: 20_000
  });

  return (
    <Context.Provider value={[user, setUser]}>
      {children}
    </Context.Provider>
  );
}

export function useUserContext () {
  return useContext(Context);
}
