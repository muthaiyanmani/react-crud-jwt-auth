/* eslint-disable @typescript-eslint/no-shadow */
import React, { useReducer, useContext, createContext, useEffect } from "react";
import { setUser, removeUser as removeUserLS, getUser } from "./token.service";
import { User } from "./token.types";
import { UserActions, UserActionTypes } from "./user.types";

type UserStateContextType = {
  userState: UserState;
  addUser: (user: User) => void;
  removeUser: () => void;
};

type UserState = { user: User | undefined };
type UserProviderProps = { children: React.ReactNode };

// Context
const UserContext = createContext<UserStateContextType | undefined>(undefined);

const userReducer = (state: UserState, action: UserActions): any => {
  switch (action.type) {
    case UserActionTypes.ADD_USER: {
      return { ...state, user: action.payload };
    }
    case UserActionTypes.REMOVE_USER: {
      return { user: {} };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: getUser(),
  });
  const user = getUser();

  useEffect(() => {
    reloadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addUser = (user: User): void => {
    setUser(user);
    dispatch({
      type: UserActionTypes.ADD_USER,
      payload: user,
    });
  };

  const removeUser = (): void => {
    dispatch({
      type: UserActionTypes.REMOVE_USER,
    });
    removeUserLS();
  };

  const reloadUser = () => {
    if (Object.getOwnPropertyNames(user).length !== 0) {
      dispatch({
        type: UserActionTypes.ADD_USER,
        payload: user,
      });
    }
  };

  const value = { userState: state, addUser, removeUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUser };
