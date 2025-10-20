
export const Category = {
  Cake: "cake",
  Coffee: "coffee",
  Juice: "juice",
  Pastry: "pastry",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
  category: Category;
  price: number;
}

// export enum CategoryEnum {
//   Cake = "cake",
//   Coffee = "coffee",
//   Juice = "juice",
//   Pastry = "pastry",
// }