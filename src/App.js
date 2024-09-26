import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route index element={<Shop />}></Route>
      <Route path='/men' element={<Men />}></Route>
      <Route path='/women' element={<Women />}></Route>
      <Route path='/kids' element={<Kids />}></Route>
    </Routes>
    </>
  );
}

export default App;
