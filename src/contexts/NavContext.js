import React, { createContext } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    return (
        <NavContext.Provider value={"Hello"}>
            {children}
        </NavContext.Provider>
    );
};
