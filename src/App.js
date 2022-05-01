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

function App() {
  return (
    <>
      <Menubar/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='inventory/:id' element={
          <RequireAuth><Inventory></Inventory></RequireAuth>
        }></Route>
        <Route path="manageitems" element={<ManageItems></ManageItems>}></Route>
        <Route path="additem" element={<AddItem></AddItem>}></Route>
        <Route path="myitems" element={<MyItems></MyItems>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path="registration" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
    
  );
}

export default App;
