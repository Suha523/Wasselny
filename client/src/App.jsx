import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNav from './components/Navbar/Navbar';
import AddAddvForm from './components/AddAddvForm/AddAddvForm';
import Search from './components/Search/Search';

function App() {
  const[addvertises, setAddvertises] = useState([])

  useEffect(() => { 
    axios.get('http://localhost:4000/addvertises').then((response) => {
        setAddvertises(response.data)
    })
  }, [])

  const postAddvertise = (addvertiseData) => {
    axios.post('http://localhost:4000/addvertises', addvertiseData).then((response) => {
        let addvertise = response.data
        setAddvertises(addvertises.push(addvertise))
    })
  };
  
  return (
    <div className="App">
          <BrowserRouter>
            <MyNav />
            <div className='d-flex justify-content-between m-5'>
                <Routes>
                  <Route path='/' element={<Search addvertises={addvertises} />} />
                  <Route path='/addAddvForm' element={<AddAddvForm postAddvertise={postAddvertise} />} />
              </Routes>
            </div>
          </BrowserRouter>
       
     
    </div>
  );
}

export default App;
