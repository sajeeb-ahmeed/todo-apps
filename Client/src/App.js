
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import Header from './Component/Shared/Header/Header';
import Testimonials from './Component/Testmonials/Testimonials';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Component/Verification/RequireAuth/RequireAuth';

import Login from './Component/Verification/Login/Login';
import Additem from './Component/ManageTodo/Additems/Additem';


function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Testimonials></Testimonials>}></Route>
        <Route path='/todo' element={<RequireAuth><Additem></Additem></RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
