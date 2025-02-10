import { Outlet, NavLink } from "react-router";
import { useNavigate } from "react-router";
import useGlobalStore from "./store/useGlobal";
import React from "react";
import "@/style/main.css";
import { FaHome } from "react-icons/fa";
import { ImSun } from "react-icons/im";
const App: React.FC = () => {
  const navigate = useNavigate();
  const { initTheme, changeTheme } = useGlobalStore();
  initTheme();
  return (
    <div className="bg-white text-black h-screen w-full">
      <div className="flex justify-end text-2xl">
        <div className="flex justify-between px-4 py-2">
          <button className="mr-4" onClick={changeTheme}>
            <ImSun />
          </button>
          <button onClick={() => navigate("/")}>
            <FaHome />
          </button>
        </div>
      </div>
      <div className="h-8"></div>
      <div className="flex">
        <div className="w-4/5">
          <Outlet></Outlet>
        </div>
        <div className="w-1/5 px-4">
          <ul>
            <li>
              <NavLink to={"/learn1"}>Learn1-基础语法</NavLink>
            </li>
            <li>
              <NavLink to={"/learn2"}>Learn2-useReducer钩子</NavLink>
            </li>
            <li>
              <NavLink to={"/learn3"}>Learn3-Zustand状态管理</NavLink>
            </li>
            <li>
              <NavLink to={"/learn4"}>Learn4-React-Router</NavLink>
            </li>
            <li>
              <NavLink to={"/learn5"}>Learn5-React生命周期钩子</NavLink>
            </li>
            <li>
              <NavLink to={"/learn6"}>Learn6-React之useEffect</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
