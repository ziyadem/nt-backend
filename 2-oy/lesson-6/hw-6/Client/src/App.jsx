import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cards from './Pages/Courses';
import Animals from './Pages/Animals';
import Fruit from './Pages/Fruit';
import Cars from './Pages/Cars';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Cards />} />
        <Route path="/animals" element={<Animals/>} />
        <Route path="/fruits" element={<Fruit />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </>
  );
}

export default App
