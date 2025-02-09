import { Outlet, NavLink } from "react-router";

function Father() {
  return (
    <>
      <div className="p-4 bg-gray-100 rounded shadow-md">
        <div>
          <div>
            这是一个父容器,<b>可以切换子容器</b>
          </div>
          <div>
            <ul>
              <li>
                <NavLink to={"/learn4/son/123/abc"}>
                  Son: /learn4/son/123/abc
                </NavLink>
              </li>
              <li>
                <NavLink to={"/learn4/files/codepzj666"}>
                  Files: /learn4/files/codepzj666
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}

export default Father;
