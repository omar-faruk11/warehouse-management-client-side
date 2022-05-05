import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import MyItems from "./Pages/MyItems/MyItems";
import AddItem from "./Pages/AddItem/AddItem";
import Home from "./Pages/Home/Home";
import ManageItems from "./Pages/ManageItems/ManageItems";
import Menubar from "./Sheard/Menubar";
import Login from "./Pages/LogIn/Login";
import Registration from "./Pages/Registration/Registration";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Inventory from "./Components/Inventory";
import NotFound from "./Pages/NotFound/NotFound";
import RequireAuth from "./Utility/RequireAuth";
import Blogs from "./Pages/Blogs/Blogs";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Menubar/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path='inventory/:id' element={
          <RequireAuth>
            <Inventory/>
            </RequireAuth>
        }/>
        <Route path="manageitems" element={
          <RequireAuth>
            <ManageItems/>
          </RequireAuth>
        }/>
        <Route path="additem" element={
          <RequireAuth>
            <AddItem/>
          </RequireAuth>
        }/>
        <Route path="myitems" element={
        <RequireAuth>
          <MyItems/>
        </RequireAuth>
        }/>
        <Route path="login" element={<Login></Login>}/>
        <Route path="forgot-password" element={<ForgotPassword></ForgotPassword>}/>
        <Route path="registration" element={<Registration></Registration>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
    
  );
}

export default App;
