import React, { createContext, useState } from 'react'

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null)
  // contextが更新されると、関わっているコンポーネントもすべて再レンダリングされる

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

