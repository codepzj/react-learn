import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CountStore = {
  count: number;
  increment: () => void;
  fetchAsyncCount: (delay: number) => void;
  doubleCount: () => void;
};

const fetchMockCount = (delay: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 模拟异步请求返回固定值
      resolve(666);
    }, delay);
  });
};

const useCountStore = create<CountStore>()(
  persist(
    (set, get) => ({
      count: 0,

      increment: () =>
        set((state) => ({
          count: state.count + 1,
        })),

      fetchAsyncCount: async (delay: number) => {
        try {
          const data = await fetchMockCount(delay);
          set({ count: data });
        } catch (error) {
          console.error("Failed to fetch count:", error);
        }
      },

      doubleCount: () => {
        const currentCount = get().count;
        set({ count: currentCount * 2 });
      },
    }),
    { name: "countStore", storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useCountStore;
