import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Form from "./pages/Register";
import Congratulations from "./pages/Congratulations";
import Display from "./pages/Display";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Form />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Congratulations/>}></Route>
          <Route path="/view" element={<Display/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
