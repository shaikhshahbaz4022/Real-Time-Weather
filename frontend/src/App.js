import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home';
import SimpleCard from './Pages/login';
import SignupCard from './Pages/register';
import Dashboard from './Pages/Dashboard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<SimpleCard />} />
          <Route path='/signup' element={<SignupCard />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
