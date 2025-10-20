import React, { createContext, useContext, useEffect, useState } from "react";
import type { Item } from "@/types/items";

interface FavoritesContextType {
  favorites: Item[];
  toggleFavorite: (item: Item) => void;
  isFavorite: (id: string) => boolean;
}


const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Item[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item: Item) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === item.id);
      if (exists) {
        // remove if already in favorites
        return prev.filter((fav) => fav.id !== item.id);
      } else {
        // add new favorite
        return [...prev, item];
      }
    });
  };

  const isFavorite = (id: string) => favorites.some((fav) => fav.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
};
