import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Register from './Components/Register'
import Login from './Components/Login';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
        <Route path="/" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="homepage" element={<Homepage />} />
        </Routes>
</BrowserRouter>
        
    </div>
  );
}

export default App;
