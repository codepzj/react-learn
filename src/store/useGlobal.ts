import { create } from "zustand";
import { persist } from "zustand/middleware";
type GlobalStore = {
  theme: "light" | "dark";
  initTheme: () => void;
  changeTheme: () => void;
};

const useGlobalStore = create<GlobalStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      initTheme() {
        const theme = get().theme;
        theme === "dark"
          ? document.documentElement.classList.add("dark")
          : document.documentElement.classList.remove("dark");
      },
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
