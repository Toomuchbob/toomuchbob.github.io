import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {

    const [nav, setNav] = useState();

    let currentNav = React.useMemo(() => ({ nav, setNav }), [nav, setNav])

    return (
        <NavContext.Provider value={currentNav}>
            {children}
        </NavContext.Provider>
    );
};
