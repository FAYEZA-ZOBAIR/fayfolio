import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kappi from "./pages/kappi";
import LBYH from "./pages/lbyh";
import Juris from "./pages/juris";
import Sushi from "./pages/sushi";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kappi" element={<Kappi />} />
        <Route path="/lbyh" element={<LBYH />} />
        <Route path="/juris" element={<Juris />} />
        <Route path="/sushi" element={<Sushi />} />
      </Routes>
    </>
  );
}

export default Router;
