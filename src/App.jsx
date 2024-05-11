
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";
import { SharedLayout } from "components/SharedLayout/SharedLayout.jsx";


export const App = () => {
  return (
  <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
    </Routes>
  );
};
