import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar, HomePage, Exchanges, CryptoCurrencies, CryptoDetails, News } from './components';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/exchanges' element={<Exchanges />} />
                <Route exact path='/cryptocurrencies' element={<CryptoCurrencies />} />
                <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                <Route exact path='/news' element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
        <div className='footer'></div>
      </div>
    </Router>
  );
}

export default App;
