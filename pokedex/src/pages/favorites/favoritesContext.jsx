

import React, { useEffect, useState } from "react";

export const FavoriteContext = React.createContext({});

export const FavoriteProvider = (props) => {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={{ setFavorite, favorite }}>
      {props.children}
    </FavoriteContext.Provider>
  );
};