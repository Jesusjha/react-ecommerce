import {Routes, Route} from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Categories from "./components/Categories/Categories";
// import Header from "./components/Header/Header";



function router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Routes>
        <Route path="/categories" element={<Categories/>} />
      </Routes>
      </>
  )
}

export default router