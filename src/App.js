import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetUser from "./pages/GetUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import 'bootstrap/dist/css/bootstrap.css';
import Update from "./pages/Update";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/getuser' element={<GetUser />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/update' element={<Update />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
