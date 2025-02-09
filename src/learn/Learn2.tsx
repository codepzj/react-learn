import { useReducer } from "react";

// Test1 相关类型定义
interface CountAction {
  type: "add" | "sub";
}

interface CountState {
  count: number;
}

const Test1 = () => {
  const reducer = (state: CountState, action: CountAction): CountState => {
    switch (action.type) {
      case "add":
        return { count: state.count + 1 };
      case "sub":
        return { count: state.count - 1 };
      default:
        throw new Error("Unknown action type");
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div className="text-2xl font-bold mb-4">{state.count}</div>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => dispatch({ type: "add" })}
        >
          +1
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => dispatch({ type: "sub" })}
        >
          -1
        </button>
      </div>
    </>
  );
};

// Test2 相关类型定义
interface CartData {
  name: string;
  price: number;
  count: number;
  id: number;
  isEdit: boolean;
}

interface CartActionBase {
  id: number;
}

interface AddAction extends CartActionBase {
  type: "ADD" | "SUB" | "DELETE" | "EDIT";
  newName?: never;
}

interface UpdateNameAction extends CartActionBase {
  type: "UPDATE_NAME";
  newName: string;
}

type CartAction = AddAction | UpdateNameAction;

const Test2 = () => {
  const initData: CartData[] = [
    { name: "小满(只)", price: 100, count: 1, id: 1, isEdit: false },
    { name: "中满(只)", price: 200, count: 1, id: 2, isEdit: false },
    { name: "大满(只)", price: 300, count: 1, id: 3, isEdit: false },
  ];

  const reducer = (state: CartData[], action: CartAction): CartData[] => {
    switch (action.type) {
      case "ADD":
        return state.map((item) =>
          item.id === action.id ? { ...item, count: item.count + 1 } : item
        );
      case "SUB":
        return state.map((item) =>
          item.id === action.id
            ? { ...item, count: Math.max(0, item.count - 1) }
            : item
        );
      case "DELETE":
        return state.filter((item) => item.id !== action.id);
      case "EDIT":
        return state;
      case "UPDATE_NAME":
        return state.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        );
      default:
        return state;
    }
  };

  const [cartState, cartDispatch] = useReducer(reducer, initData);

  return (
    <>
      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">商品名</th>
            <th className="border border-gray-400 p-2">价格</th>
            <th className="border border-gray-400 p-2">数量</th>
            <th className="border border-gray-400 p-2">操作</th>
          </tr>
        </thead>
        <tbody>
          {cartState.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-400 p-2">{item.name}</td>
              <td className="border border-gray-400 p-2">{item.price}</td>
              <td className="border border-gray-400 p-2">{item.count}</td>
              <td className="border border-gray-400 p-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => cartDispatch({ id: item.id, type: "ADD" })}
                >
                  +
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => cartDispatch({ id: item.id, type: "SUB" })}
                >
                  -
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => cartDispatch({ id: item.id, type: "DELETE" })}
                >
                  删除
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() =>
                    cartDispatch({
                      id: item.id,
                      type: "UPDATE_NAME",
                      newName: "codepzj",
                    })
                  }
                >
                  修改名称
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Learn2 = () => {
  return (
    <>
      <Test1 />
      <Test2 />
    </>
  );
};

export default Learn2;
