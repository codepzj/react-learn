import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-4xl font-bold">404</div>
      <div className="text-2xl">页面不存在</div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => navigate("/")}
        >
          跳转回首页
        </button>
      </div>
    </div>
  );
}

export default NotFound;
