import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AiOutlineTool, AiOutlineMessage } from 'react-icons/ai'

function HomePage(  ) {


    return (
        <>
            <div className="homePageContainer">

                <div className="infoCardMain">
                    <div className="iconInfoCard">
                        <HiOutlineShoppingCart />
                    </div>
                    <Link to={'/shop'}><h1>Tienda Online</h1></Link>
                    <p>Ingresa a nuestra tienda Online!</p>
                    <p>Hasta 18 cuotas con tarjeta de crédito</p>
                    <p>Envíos a todo el país</p>
                </div>
                <div className="infoCardMain">
                    <div className="iconInfoCard">
                        <AiOutlineTool />
                    </div>
                    <Link to={'/shop'}><h1>Servicio técnico</h1></Link>
                    <p>Reparación de dispositivos electrónicos</p>
                    <p>por personal capacitado en el rubro</p>
                    <p>PC, Notebook, Celulares, Tablet, TV y Monitores</p>
                </div>
                <div className="infoCardMain">
                    <div className="iconInfoCard">
                        <AiOutlineMessage />
                    </div>
                    <Link to={'/shop'}><h1>Contacto</h1></Link>
                    <p>Si tienes una duda sobre</p>
                    <p>reparación y/o ventas</p>
                    <p>No dudes en contactarnos</p>
                </div>

            </div>

        </>
    )
}

export default HomePage;