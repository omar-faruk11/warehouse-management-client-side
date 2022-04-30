import { Route, Routes } from "react-router-dom";
import MyItems from "./Pages/MyItems/MyItems";
import AddItem from "./Pages/AddItem/AddItem";
import Home from "./Pages/Home/Home";
import ManageItems from "./Pages/ManageItems/ManageItems";
import Menubar from "./Sheard/Menubar";
import Login from "./Pages/LogIn/Login";
import Registration from "./Pages/Registration/Registration";

function App() {
  return (
    <>
      <Menubar/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path="manageitems" element={<ManageItems></ManageItems>}></Route>
        <Route path="additem" element={<AddItem></AddItem>}></Route>
        <Route path="myitems" element={<MyItems></MyItems>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="registration" element={<Registration></Registration>}></Route>
      </Routes>
    </>
    
  );
}

export default App;
