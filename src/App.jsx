
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { SharedLayout } from "components/SharedLayout/SharedLayout.jsx";
import { Loader } from "components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage.jsx"));





export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
  <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
    </Routes></Suspense>
  );
};
