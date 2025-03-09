import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

const BASE_URL = "http://localhost:3000";

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  fetchProduct: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/getAllProducts`);

      set({ 
        products: response.data.getProducts, 
        error: null, 
        loading: false 
      });
      console.log("Données reçues...........", response.data);
    } catch (error) {
      console.error(error);
      set({ 
        error: "Something went wrong", 
        loading: false 
      });
    }
  },

  deleteProduct: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/deleteProduct/${id}`);
      set({ 
        products: get().products.filter((product) => product.id !== id),
        loading: false,
        error: null,
      });
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error(error);
      set({ 
        error: "Something went wrong", 
        loading: false 
      });
      toast.error("Something went wrong");
    }
  },
}));
