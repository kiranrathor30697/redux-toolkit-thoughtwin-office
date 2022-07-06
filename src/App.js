import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetUser from "./pages/GetUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import 'bootstrap/dist/css/bootstrap.css';
import Update from "./pages/Update";
import Inc_Dec from "./pages/Inc_Dec";


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
      <Route path='/inc_dec' element={<Inc_Dec />} />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
