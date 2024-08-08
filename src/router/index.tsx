import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/homePage/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
