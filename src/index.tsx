import "./style/main.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Learn1 from "@/learn/Learn1";
import Learn2 from "@/learn/Learn2";
import Learn3 from "@/learn/Learn3";
import Father from "@/learn/learn4/father";
import Son from "@/learn/learn4/son";
import Files from "@/learn/learn4/files";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="learn1" element={<Learn1 />} />
        <Route path="learn2" element={<Learn2 />} />
        <Route path="learn3" element={<Learn3 />} />
        <Route path="learn4" element={<Father />}>
          <Route path="son/:id?/:cid?" element={<Son />}></Route>
          <Route path="files/*" element={<Files />}></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
