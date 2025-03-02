import { createContext, useContext, Dispatch, SetStateAction } from "react";

export interface User {
  email: string;
  name: string;
  is_staff?: boolean;
}

export const UserContext = createContext<{
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}>({
  user: null,
  setUser: () => {},
});

export const useUser = () => useContext(UserContext);
