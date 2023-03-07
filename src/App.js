import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotMatch from './routes/NotMatch';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import SinglePage from './routes/SinglePage';

import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Profile from './routes/Profile';

const App = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </div>
);

export default App;
