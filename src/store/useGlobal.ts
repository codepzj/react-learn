import { create } from "zustand";
import { persist } from "zustand/middleware";
type GlobalStore = {
  theme: "light" | "dark";
  changeTheme: () => void;
};

const useGlobalStore = create<GlobalStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      changeTheme: () => {
        document.documentElement.classList.toggle("dark");
        set({ theme: get().theme === "light" ? "dark" : "light" });
      },
    }),
    {
      name: "globalStore",
    }
  )
);

export default useGlobalStore;
