import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import "./styles/style.scss";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:id" element={<Article />} />

          <Route path="/" element={<Article />} />
        </Routes>
      </Router>
    </>
  );
}
