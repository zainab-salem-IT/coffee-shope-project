// src/services/itemService.ts
import type { Item } from "@/types/items";

const BASE_URL = "https://68ee1c16df2025af78026770.mockapi.io/ItemCard/items";

export async function getItems(): Promise<Item[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  return res.json();
}
