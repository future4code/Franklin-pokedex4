import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
