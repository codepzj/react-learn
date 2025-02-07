import classNames from "classnames";
import { useState } from "react";

function Test1() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div style={{ color: "red", fontSize: "20px" }}>{count} </div>
      <button onClick={() => setCount(count + 1)}>{"count++"}</button>
    </>
  );
}

// 遍历对象
function Test2() {
  const people = [
    { id: 1, name: "code1", hobby: "coding1" },
    { id: 2, name: "code2", hobby: "coding2" },
    { id: 3, name: "code3", hobby: "coding3" },
  ];
  return (
    <>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name}-{person.hobby}
          </li>
        ))}
      </ul>
    </>
  );
}

// 条件渲染
function Test3() {
  const [isLogin, setLoginStatus] = useState(false);
  return (
    <>
      <button onClick={() => setLoginStatus(!isLogin)}>登录状态切换</button>
      {isLogin && <div>登录了</div>}
      {isLogin ? <div>登录成功了</div> : <div>loading...</div>}
    </>
  );
}

// 复杂条件渲染
function Test4() {
  let token = "codepzj";
  switch (token) {
    case "":
      return <>token为空</>;
    case "codepzj":
      return <>token为codepzj</>;
    default:
      return <>default</>;
  }
}

// 父子组件
function Test5(element) {
  return (
    <>
      <div>Father</div>
      {element}
    </>
  );
}

function Test6() {
  return <>Son</>;
}

// 点击事件
function Test7() {
  return (
    <button onClick={() => console.log("我被点击了")}>
      这是一个平平无奇的按钮
    </button>
  );
}

// 类名控制
const Test8 = () => {
  return (
    <>
      <div style={{ color: "red", fontSize: "30px" }}>测试样式1</div>
      <div className="test8 test9">测试样式2</div>
    </>
  );
};
// B站评论小案例
const Test9 = () => {
  // 默认显示最新评论
  const data = [
    {
      id: 2,
      username: "sam",
      comment: "真厉害",
      publish_date: "2025-02-03",
      like: 1,
    },
    {
      id: 1,
      username: "jack",
      comment: "呵呵",
      publish_date: "2025-01-02",
      like: 999,
    },
  ];
  const [commentData, setCommentData] = useState(data);
  const [commentType, setCommentType] = useState(0);
  const switchCommentType = (type) => {
    let sortData;
    switch (type) {
      case 0:
        sortData = [...commentData].sort(
          (a, b) => new Date(b.publish_date) - new Date(a.publish_date),
        );
        break;
      case 1:
        sortData = [...commentData].sort((a, b) => b.like - a.like);
        break;
      default:
        throw new Error("类型异常");
    }
    setCommentType(type);
    setCommentData(sortData);
  };

  return (
    <>
      <div className="w-48 flex justify-between items-center">
        <div>
          <span className="text-xl font-bold mr-1">评论</span>
          <span className="text-sm">{data.length}</span>
        </div>
        <div>
          <span
            onClick={() => switchCommentType(0)}
            className={classNames({ "text-blue-500": !commentType })}
          >
            最新
          </span>
          <span className={"mx-1"}>|</span>
          <span
            onClick={() => switchCommentType(1)}
            className={classNames({ "text-blue-500": commentType })}
          >
            最热
          </span>
        </div>
      </div>
      <hr />
      <div>
        {commentData.map((data) => (
          <div key={data.id}>
            <div>{data.username}</div>
            <div>{data.comment}</div>
            <div>{data.publish_date}</div>
            <div>{data.like}</div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

const Learn1 = () => {
  return (
    <>
      <Test1 />
      <Test2 />
      <Test3 />
      <Test4 />
      <div>{Test5(Test6())}</div>
      <Test7 />
      <Test8 />
      <Test9 />
    </>
  );
};

export default Learn1;
