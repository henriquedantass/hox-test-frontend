import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./hooks/ProctedRoute";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Products } from "./pages/Products";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
