import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/homePage/HomePage";
import ProductPage from "../pages/productPage/ProductPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
