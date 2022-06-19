import React, { useState, useEffect } from 'react';
import NavBar from './pages/NavigationPage/navBar';
import RoutesPage from './routes/routesPage';
import './styles/index.css'
import HashLoader from 'react-spinners/HashLoader'
import FootePage from './pages/footerPage/footer';


function App() {

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])


  return (
    <>

      {
        loading ?

          <div className="loadingSign">
            <HashLoader
              size={100}
              color={'#ffbb55'}
              loading={loading}
            />

            <h1>Cargando...</h1>

          </div>

          :
          <>
            <NavBar />
            <RoutesPage />
            <FootePage/>
          </>
      }

    </>
  );
}

export default App;
