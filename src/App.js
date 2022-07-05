import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetUser from "./pages/GetUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/getuser' element={<GetUser />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
