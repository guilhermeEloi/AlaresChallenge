import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Plan from "./pages/plan";
import Order from "./pages/order";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}
