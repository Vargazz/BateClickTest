import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Car from './pages/Car';
import CreateCar from './pages/CreateCar'
import UpdateCar from './pages/UpdateCar'
import CreateDefect from './pages/CreateDefect'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/car' element={ <Car /> } />
      <Route path='/createCar' element={ <CreateCar /> } />
      <Route path='/update' element={ <UpdateCar /> } />
      <Route path='/defects' element={ <CreateDefect /> } />
    </Routes>
  );
}

export default App;
