import { Outlet, NavLink } from "react-router";
import { useNavigate } from "react-router";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between">
        <div className="font-bold text-2xl">codepzj的React学习代码</div>
        <button className="text-red-500" onClick={() => navigate("/")}>
          🏠 跳转回首页
        </button>
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
    </>
  );
}

export default App;
