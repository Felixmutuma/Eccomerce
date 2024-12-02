import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FAQS from './FAQS'
import Homepage from "../pages/Homepage";


function App() {
  return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/faqs" element={<FAQS/>}/>
            </Routes>
          </BrowserRouter>
        </>
  );
}

export default App;
