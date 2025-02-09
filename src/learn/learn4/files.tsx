import { useParams } from "react-router";

function Files() {
  let { "*": path } = useParams();

  return (
    <>
      <div>这是Files</div>
      <div>path: {path}</div>
    </>
  );
}

export default Files;
