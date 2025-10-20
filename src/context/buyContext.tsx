import React, { createContext, useContext, useState, useEffect } from "react";
import type { Item } from "@/types/items";

interface BuyItem extends Item {
  quantity: number;
}

interface BuyContextType {
  buyList: BuyItem[];
  addToBuy: (item: Item) => void;
  removeFromBuy: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}



const BuyContext = createContext<BuyContextType | undefined>(undefined);

export const BuyProvider = ({ children }: { children: React.ReactNode }) => {
  const [buyList, setBuyList] = useState<BuyItem[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("buyList");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("buyList", JSON.stringify(buyList));
  }, [buyList]);

  const addToBuy = (item: Item) => {//function  except on arg item from type ITem , it's update bylist state
    setBuyList((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        // increase quantity if already in cart
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // add new item with quantity 1
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromBuy = (id: number) => {
    setBuyList((prev) => prev.filter((item) => Number(item.id) !== id));
  };

  const increase = (id: number) => {
    setBuyList((prev) =>
      prev.map((item) =>
        Number(item.id) === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id: number) => {
    setBuyList((prev) =>
      prev
        .map((item) =>
          Number(item.id) === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // remove if quantity = 0
    );
  };

  return (
    <BuyContext.Provider
      value={{ buyList, addToBuy, removeFromBuy, increase, decrease }}
    >
      {children}
    </BuyContext.Provider>
  );
};

export const useBuy = () => {
  const context = useContext(BuyContext);
  if (!context) throw new Error("useBuy must be used within a BuyProvider");
  return context;
};
