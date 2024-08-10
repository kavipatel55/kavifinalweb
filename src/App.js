import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import ProductInfo from "./components/ProductInfo";
import Registration from "./pages/auth/Registration";
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import Add from "./pages/auth/admin/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Registration />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/Add" element={< Add/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
