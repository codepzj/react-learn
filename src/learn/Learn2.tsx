import React from "react";
import { useReducer } from "react";
interface countAction {
  type: "add" | "sub";
}
interface countState {
  count: number;
}
const Test10 = () => {
  const reducer = (state: countState, action: countAction) => {
    switch (action.type) {
      case "add":
        return { count: state.count++ };
      case "sub":
        return { count: state.count-- };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <div>{state.count}</div>
      <div>
        <button onClick={() => dispatch({ type: "add" })}>+1</button>
        <button onClick={() => dispatch({ type: "sub" })}>-1</button>
      </div>
    </>
  );
};

const Test11 = () => {
  interface cartData {
    name: string;
    price: number;
    count: number;
    id: number;
    isEdit: boolean;
  }
  interface cartActionBase {
    id: number;
  }
  interface addAction extends cartActionBase {
    type: "ADD" | "SUB" | "DELETE" | "EDIT";
    newName?: never;
  }
  interface updateNameAction extends cartActionBase {
    type: "UPDATE_NAME";
    newName: string;
  }
  type cartAction = addAction | updateNameAction;
  const initData: cartData[] = [
    { name: "小满(只)", price: 100, count: 1, id: 1, isEdit: false },
    { name: "中满(只)", price: 200, count: 1, id: 2, isEdit: false },
    { name: "大满(只)", price: 300, count: 1, id: 3, isEdit: false },
  ];
  const reducer = (state: cartData[], action: cartAction) => {
    switch (action.type) {
      case "ADD":
        return state.map((item) =>
          item.id === action.id ? { ...item, count: item.count + 1 } : item
        );
      case "SUB":
        return state.map((item) =>
          item.id === action.id ? { ...item, count: item.count - 1 } : item
        );
      case "DELETE":
        return state.filter((item) => item.id !== action.id);
      case "EDIT":
        return state;
      case "UPDATE_NAME":
        return state.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        );
    }
  };
  const [cartState, cartDispatch] = useReducer(reducer, initData);
  return (
    <>
      <button onClick={() => console.log(cartState)}>log</button>
      <br />
      <button onClick={() => cartDispatch({ id: 1, type: "ADD" })}>Add</button>
      <br />
      <button onClick={() => cartDispatch({ id: 2, type: "SUB" })}>SUB</button>
      <br />
      <button onClick={() => cartDispatch({ id: 2, type: "DELETE" })}>
        DELETE
      </button>
      <br />
      <button
        onClick={() =>
          cartDispatch({ id: 3, type: "UPDATE_NAME", newName: "codepzj" })
        }
      >
        UPDATE_NAME
      </button>
    </>
  );
};
const Learn2 = () => {
  return (
    <>
      <Test10></Test10>
      <Test11></Test11>
    </>
  );
};
export default Learn2;
