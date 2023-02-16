import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register.js";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Cuisine from "./components/Cuisine";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cuisine/:type" element={<Cuisine />} />
              <Route path="/searched/:search" element={<Searched />} />
              <Route path="/recipe/:name" element={<Recipe />} />
            </Route>
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
