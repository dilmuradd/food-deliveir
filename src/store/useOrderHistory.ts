import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface OrderStore {
  orders: Product[]; 
  addOrders: (newOrders: Product[]) => void; 
  getOrders: () => Product[];  
  clearOrders: () => void;  
}

const useOrderStore = create<OrderStore>((set, get) => ({
  orders: JSON.parse(localStorage.getItem('orders') || '[]'), 
  addOrders: (newOrders) => set((state) => {
    const updatedOrders = [...state.orders, ...newOrders];  
    localStorage.setItem('orders', JSON.stringify(updatedOrders));  
    return { orders: updatedOrders }; 
  }),
  getOrders: () => get().orders, 
  clearOrders: () => {
    set({ orders: [] }); 
    localStorage.removeItem('orders'); 
  },
}));

export { useOrderStore };
