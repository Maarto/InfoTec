import React, { useState } from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'

function NavBar() {

    let [activePage, setActivePage] = useState('Inicio')
    let optionsList = [
        { id: 'Inicio', link: '/' },
        { id: 'Tienda', link: '/shop' },
        { id: 'Contacto', link: '/contact' },
        { id: 'Login', link: '/auth/login' }
    ];

    return (
        <nav>
            <div className="containerNav">
                <div className="IconImage">
                    <Link to={'./'}><FaPowerOff className='IconLogou' /><p>InfoTec</p></Link>
                </div>
                <div className="navSearcher">
                    <form action="">
                        <BiSearchAlt className='iconSearch' />
                        <input type="text" name="search" id="" placeholder='Buscar producto...' />
                    </form>
                </div>
                <div className="OptionsContainer">
                    <ul className='OptionsList'>
                        {
                            optionsList.map((option) => {
                                return (
                                    <li key={option.id} className={activePage === option.id ? 'pageActive' : ''}>
                                        <Link to={option.link} onClick={() => setActivePage(option.id)}>{option.id}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;