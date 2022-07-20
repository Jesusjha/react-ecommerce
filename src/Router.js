import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Help from "./components/Help/Help";
import Contact from "./components/Contact/Contact";
import Categories from "./components/Categories/Categories";



function RouterPath() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </>
  )
}

export default RouterPath