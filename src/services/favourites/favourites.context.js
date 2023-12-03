import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.warn("error storing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");

      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.warn("error loading", e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const add = (restaurant) => {
    return setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId,
    );

    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites: favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
