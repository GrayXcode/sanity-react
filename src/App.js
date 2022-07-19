import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<AllPosts />} path="/" exact />
          <Route element={<OnePost />} path="/:slug" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
