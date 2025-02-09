import { Outlet, NavLink } from "react-router";
import { useNavigate } from "react-router";
import useGlobalStore from "./store/useGlobal";
function App() {
  const navigate = useNavigate();
  const { theme, changeTheme } = useGlobalStore();
  return (
    <div className="bg-white text-black h-screen w-full">
      <div className="flex justify-between">
        <div className="font-bold text-2xl">codepzj的React学习代码</div>
        <div>
          <button onClick={changeTheme}>
            {theme === "light" ? "亮色" : "暗色"}
          </button>
          <button className="text-red-500" onClick={() => navigate("/")}>
            🏠 跳转回首页
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
