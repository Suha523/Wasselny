import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddAddvForm from "../AddAddvForm/AddAddvForm";
import Addvertisements from "../Addvertisements/Addvertisements";
import Search from "../Search/Search";

function Landing() {
  return (
    <div>
      <div className='d-flex justify-content-between m-5'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/addvs' element={<Addvertisements />} />
            <Route path='/addAddvForm' element={<AddAddvForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Landing;
