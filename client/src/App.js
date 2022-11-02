import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNav from './components/Navbar/Navbar';
import AddAddvForm from './components/AddAddvForm/AddAddvForm';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <MyNav />
            <div className='d-flex justify-content-between m-5'>
                <Routes>
                  <Route path='/' element={<Search />} />
                  <Route path='/addAddvForm' element={<AddAddvForm />} />
              </Routes>
            </div>
          </BrowserRouter>
       
     
    </div>
  );
}

export default App;
