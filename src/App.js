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
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Loading from './components/utilities/Loading';
import IsVarified from './components/shared/IsVarified';
import RequireAuth from './components/utilities/RequireAuth';
import Dashboard from './components/pages/Dashboard';
import MyAppointments from './components/child/MyAppointments';
import MyReview from './components/child/MyReviews';
import MyHistory from './components/child/MyHistory';
import AllUsers from './components/child/AllUsers';
import RequireAdmin from './components/utilities/RequireAdmin';
import AddDoctor from './components/child/AddDoctor';
import ManageDoctor from './components/child/ManageDoctor';
export const ToastContext = createContext()
function App() {
  const [user, loading] = useAuthState(auth);
  const toastConfig = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <ToastContext.Provider value={toastConfig}>
      <div className="App">
        <Navbar></Navbar>
        {(!user?.emailVerified && user?.uid) && <IsVarified></IsVarified>}
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="appointment" element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }></Route>
          <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyAppointments></MyAppointments>}></Route>
            <Route path="my-reviews" element={<MyReview></MyReview>}></Route>
            <Route path="my-history" element={<MyHistory></MyHistory>}></Route>
            <Route path="all-users" element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }></Route>
            <Route path="manage-doctor" element={
              <RequireAdmin>
                <ManageDoctor></ManageDoctor>
              </RequireAdmin>
            }></Route>
            <Route path="add-doctor" element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }></Route>
          </Route>
          <Route path="reviews" element={<Reviews></Reviews>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="Register" element={<Register></Register>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </ToastContext.Provider>
  );
}

export default App;
