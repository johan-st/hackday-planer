import React from 'react';

const state = { numn: 0 };
const dispatch = () => {};

const GlobalContext = React.createContext({ state, dispatch });

export { GlobalContext };
