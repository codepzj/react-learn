import useCountStore from "@/store/useCount";

function Learn3() {
  const { count, increment, fetchAsyncCount, doubleCount } = useCountStore();
  return (
    <>
      <div className="text-2xl font-bold mb-4">{count}</div>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          onClick={increment}
        >
          加一
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
          onClick={() => fetchAsyncCount(1000)}
        >
          获取异步数据
        </button>
        <button onClick={doubleCount}>获取2倍数据</button>
      </div>
    </>
  );
}

export default Learn3;
