import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) =>
    set((state) => {
      return { products: products };
    }),
}));
