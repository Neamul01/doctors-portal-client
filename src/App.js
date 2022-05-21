import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Reviews from './Pages/Reviews/Reviews';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import RequireAuth from './Pages/Shared/RequireAuth';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from "./Pages/Dashboard/MyHistory";
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import 'react-toastify/dist/ReactToastify.css';
import AddDoctor from './Pages/Dashboard/AddDoctor';

function App() {
  return (
    <div className="App md:mx-12 mx-4">
      {/* sticky top-0 z-10 backdrop-blur-md */}
      <div className=''>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={
            <RequireAdmin><Users></Users></RequireAdmin>
          }></Route>
          <Route path='adddoctor' element={
            <RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>
          }></Route>
        </Route>

        <Route path='contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
