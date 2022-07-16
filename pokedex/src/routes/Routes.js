import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "../pages/detailspage/DetailsPage";
import HomePage from "../pages/homepage/HomePage";
import InitialPage from "../pages/initialpage/InitialPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<InitialPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:pokemonId" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
