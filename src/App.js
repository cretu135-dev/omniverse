
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/divglobe/website';
import Connect from './components/connect/connect';
import Wallet from './components/wallet/wallet';

function App() {
  return (
    <div className="App">
      <Router>
            <div className="App">
              
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/connect" element={<Connect/>} />
                <Route path="/wallet" element={<Wallet/>} />
              </Routes>
              
            </div>
          </Router>
    </div>
  );
}

export default App;
