import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


function App() {
  const [authenticate, setAuthenticate] = useState(false); //false면 로그인 안된거고 , true면 로그인 성공한거임 
  useEffect(() => {
    console.log("Authenticate:", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/Login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/Product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
