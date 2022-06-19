import React from 'react';
import NavBar from './pages/navigation/NavBar';
import Routes from './routes/routes';
import './styles/index.css'
import Footer from './pages/footer/Footer';


function App() {
  return (
    <>
      <NavBar />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
