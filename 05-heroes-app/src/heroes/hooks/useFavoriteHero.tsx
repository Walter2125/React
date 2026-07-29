import { use } from "react";
import { FavoriteHeroContext } from "../context/FavoriteHeroContext";

export const useFavoriteHero = () => {
  const context = use(FavoriteHeroContext);

  if (!context) {
    throw new Error("useFavoriteHero debe usarse dentro de un FavoriteHeroProvider");
  }

  return context;
};
