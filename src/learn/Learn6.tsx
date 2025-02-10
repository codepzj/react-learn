import { useEffect, useState } from "react";

function Learn6() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);

  useEffect(() => {
    console.log("effect");
  }, [a]);
  return (
    <>
      <div className="px-4 py-6">
        <div className="mb-4">
          useEffect 相当于 <b>componentDidMount</b> + <b>componentDidUpdate</b>
        </div>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            onClick={() => setA(6)}
          >
            a的值为{a}
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300"
            onClick={() => setB(3534)}
          >
            b的值为{b}
          </button>
        </div>
      </div>
    </>
  );
}

export default Learn6;
