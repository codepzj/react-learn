import { useParams } from "react-router";

function Son() {
  const params = useParams();
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-semibold text-blue-600">Son Component</h2>
      <div className="mt-2 text-gray-700">
        <strong>Parameters:</strong> {JSON.stringify(params, null, 2)}
      </div>
    </div>
  );
}
export default Son;
