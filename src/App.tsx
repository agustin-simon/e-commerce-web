import { Box } from "@chakra-ui/react";
import Nav from "./components/nav/Nav";
import "./App.css";
import StickyNav from "./components/sticky-nav/StickyNav";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Balls from "./pages/balls/Balls";
import AboutUs from "./pages/about-us/AboutUs";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import ProductDetails from "./pages/product-details/ProductDetails";
import ProfileLogin from "./pages/profile-login/ProfileLogin";

function App() {
  return (
    <Box bg="gray.100">
      {" "}
      <Nav />
      <StickyNav />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile-login" element={<ProfileLogin />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/balls" element={<Balls />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
