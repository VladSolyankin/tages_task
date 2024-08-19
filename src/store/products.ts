import { defineStore } from "pinia";
import items from "../data/items.json";
import materials from "../data/materials.json";
import { ProductState, Product } from "../types";

export const useProductStore = defineStore<
  string,
  ProductState,
  {},
  {
    loadProducts: () => void;
    addToCart: (productId: string) => void;
    toggleFavorite: (productId: string) => void;
    filterProducts: (material: string) => void;
    sortProducts: (order: string) => void;
  }
>("products", {
  state: (): ProductState => ({
    products: items as Product[],
    filteredProducts: items as Product[],
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
    materials: materials,
  }),
  actions: {
    loadProducts() {
      this.products = items as Product[];
    },
    addToCart(productId: string) {
      const index = this.cart.indexOf(productId);
      if (index > -1) {
        this.cart.splice(index, 1);
      } else {
        this.cart.push(productId);
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    toggleFavorite(productId: string) {
      const index = this.favorites.indexOf(productId);
      if (index > -1) {
        this.favorites.splice(index, 1);
      } else {
        this.favorites.push(productId);
      }
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    filterProducts(material: string) {
      if (material === "all") {
        this.filteredProducts = this.products;
        return;
      }

      this.filteredProducts = this.products.filter(
        (product) => product.material.toString() === material
      );
    },
    sortProducts(order: string) {
      if (order === "asc") {
        this.filteredProducts.sort(
          (a, b) => a.price.current_price - b.price.current_price
        );
      } else {
        this.filteredProducts.sort(
          (a, b) => b.price.current_price - a.price.current_price
        );
      }
    },
  },
});
