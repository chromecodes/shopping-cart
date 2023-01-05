import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <div className='app bg-slate-100'>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </>
  );
}
