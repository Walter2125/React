import { createContext, useCallback, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContextProps {
    // State
    favorites: Hero[];
    favoriteCount: number;

    // Methods
    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext<FavoriteHeroContextProps | null>(null);

const FAVORITES_KEY = 'favorites';

const getFavoriteFromLocaleStorage = (): Hero[] => {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<Hero[]>(getFavoriteFromLocaleStorage());

    const toggleFavorite = useCallback((hero: Hero) => {
        setFavorites((prev) =>
            prev.some((h) => h.id === hero.id)
                ? prev.filter((h) => h.id !== hero.id)
                : [...prev, hero]
        );
    }, []);

    const isFavorite = useCallback(
        (hero: Hero) => favorites.some((h) => h.id === hero.id),
        [favorites]
    );
    
    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    }, [favorites]);

    const value = useMemo(
        () => ({
            favorites,
            favoriteCount: favorites.length,
            isFavorite,
            toggleFavorite,
        }),
        [favorites, isFavorite, toggleFavorite]
    );

    return (
        <FavoriteHeroContext value={value}>
            {children}
        </FavoriteHeroContext>
    );
};

