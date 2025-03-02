import { createContext, useContext } from "react";

export type User = {
  email: string;
  name: string;
  is_staff: boolean;
};

export const UserContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
}>({
  user: null,
  setUser: () => {},
});

export const useUser = () => useContext(UserContext);
