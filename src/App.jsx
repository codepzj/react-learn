import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const people = [
    { id: 1, name: "codepzj1", hobby: "coding1" },
    { id: 2, name: "codepzj2", hobby: "coding2" },
    { id: 3, name: "codepzj3", hobby: "coding3" },
  ];
  const [isLogin, setLoginStatus] = useState(false);

  return (
    <div className="App">
      <div style={{ color: "red", fontSize: "20px" }}>{count} </div>
      <button onClick={() => setCount(count + 1)}>{"count++"}</button>

      {/* 遍历对象 */}
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name}-{person.hobby}
          </li>
        ))}
      </ul>

      {/* 条件渲染 */}
      <button onClick={() => setLoginStatus(!isLogin)}>登录状态切换</button>
      {isLogin && <div>登录了</div>}
      {isLogin ? <div>登录成功了</div> : <div>loading...</div>}
    </div>
  );
}

export default App;
