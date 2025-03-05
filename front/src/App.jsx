import NavBar from "./components/navBar.jsx";
import Home from "./page/home.jsx";
import Product from "./page/product.jsx";
import { Routes, Route } from "react-router-dom";
import { useThemeStore } from "./useStoreTheme/useStoreStheme.js";
function App() {
  const { theme } = useThemeStore();
  return (
    <div
      className=" min-h-screen bg-base-200 transition-colors duration-300 "
      data-theme={theme}
    >
      <NavBar />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
