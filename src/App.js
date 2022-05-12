import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/pages/Home';
import Navbar from './components/shared/Navbar';
import About from './components/pages/About';
import Appointment from './components/pages/Appointment';
import Reviews from './components/pages/Reviews';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import NotFound from './components/pages/NotFound';
import Footer from './components/shared/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from 'react';
export const ToastContext = createContext()
function App() {
  const toastConfig = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }
  return (
    <ToastContext.Provider value={toastConfig}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/appointment" element={<Appointment></Appointment>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/contact" element={<Login></Login>}></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </ToastContext.Provider>
  );
}

export default App;
