import { FaPowerOff } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'

import { useState } from 'react'

export default function NavBar() {


    let [Page, setPage] = useState<string>('inicio')

    function setPageState(statepage : string) {
        return setPage(statepage)
    }

    function checkPage(pag : string) {
        if(pag === Page){
            return 'pageActive'
        }
    }

    return (
        <nav>
            <div className="containerNav">

                <div className="IconImage">
                    <Link to={'./'} onClick={ () => {setPageState('inicio')}}><FaPowerOff className='IconLogou' /><p>InfoTec</p></Link>
                </div>
                <div className="navSearcher">
                    <form action="">
                        <BiSearchAlt className='iconSearch'/>
                        <input type="text" name="search" id="" placeholder='Buscar producto...'/>
                    </form>
                </div>
                <div className="OptionsContainer">
                    <ul className='OptionsList'>
                        <li className={checkPage('inicio')}><Link to={'./'} id='Inicio' onClick={ () => {setPageState('inicio')}}>Inicio</Link></li>
                        <li className={checkPage('tienda')}><Link to={'/shop'} id='Tienda' onClick={ () => {setPageState('tienda')}}>Tienda</Link></li>
                        <li className={checkPage('contacto')}><Link to={'/contact'} id='Contacto' onClick={ () => {setPageState('contacto')}}>Contacto</Link></li>
                        <li className={checkPage('login')}><Link to={'/auth/login'} id='Login' onClick={ () => {setPageState('login')}}>Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

