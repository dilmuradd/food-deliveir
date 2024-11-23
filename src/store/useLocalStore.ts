import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface CartProduct extends Product {
  count: number;
}

interface CartState {
  useLocalObject: CartProduct[];
  useLocalFunction: (item: Product) => void;
  increaseCount: (id: number) => void;
  decreaseCount: (id: number) => void;
  removeProduct: (id: number) => void; 
  updateFromLocalStorage: () => void;
  clearStore:()=>void
}

let useLocalStore = create<CartState>((set) => {
  const initialLocalStorageData = localStorage.getItem("cart");
  const initialState: CartProduct[] = initialLocalStorageData
    ? JSON.parse(initialLocalStorageData)
    : [];

  return {
    useLocalObject: initialState,

    useLocalFunction: (item: Product) =>
      set((state) => {
        const isItemInCart = state.useLocalObject.some((product) => product.id === item.id);
        if (isItemInCart) return state;

        const updatedState = [...state.useLocalObject, { ...item, count: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedState));

        return { useLocalObject: updatedState };
      }),

    increaseCount: (id: number) =>
      set((state) => {
        const updatedState = state.useLocalObject.map((product) =>
          product.id === id ? { ...product, count: product.count + 1 } : product
        );
        localStorage.setItem("cart", JSON.stringify(updatedState));
        return { useLocalObject: updatedState };
      }),

    decreaseCount: (id: number) =>
      set((state) => {
        const updatedState = state.useLocalObject.map((product) =>
          product.id === id && product.count > 1
            ? { ...product, count: product.count - 1 }
            : product
        );
        localStorage.setItem("cart", JSON.stringify(updatedState));
        return { useLocalObject: updatedState };
      }),
      clearStore:()=>set(()=>({useLocalObject:[]})),

    removeProduct: (id: number) =>
      set((state) => {
        const updatedState = state.useLocalObject.filter((product) => product.id !== id); // ID bo'yicha mahsulotni o'chirish
        localStorage.setItem("cart", JSON.stringify(updatedState));
        return { useLocalObject: updatedState };
      }),

    updateFromLocalStorage: () => {
      const storedData = localStorage.getItem("cart");
      if (storedData) {
        set({ useLocalObject: JSON.parse(storedData) });
      }
    },
  };

});

export default useLocalStore;
