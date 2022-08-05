import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./hooks/ProctedRoute";
import { EditProduct } from "./pages/EditProduct";
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
          <Route path="/" element={<Products />} />
          <Route path="/edit/:productId" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
