import { FiMail, FiTwitter } from 'react-icons/fi'
import { BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'

function Footer() {
    return (
        <footer>
            <div className="containerFooter">
                <div className="containerInfo">
                    <div className="footerCInfo">
                        <div className="textInfoF">
                            <h1>Contáctate</h1>
                        </div>
                        <div className="contenedorInformacion">
                            <div className="contInfo">
                                <div className="intoInfoFooter">
                                    <FiMail className='footerIcon' />
                                    <p>ventas@infoteclaplata.com.ar</p>
                                </div>
                                <div className="intoInfoFooter">
                                    <BsTelephone className='footerIcon' />
                                    <p>(0221) 446-8020</p>
                                </div>
                            </div>
                            <div className="contInfo">
                                <div className="intoInfoFooter">
                                    <BsWhatsapp className='footerIcon' />
                                    <p>(0221) 15-5399845 </p>
                                </div>
                                <div className="intoInfoFooter">
                                    <GoLocation className='footerIcon' />
                                    <p>Boulevard 120 N 1486 e/62 y 63 - La Plata</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="containerInfo">
                    <div className="footerCInfo">
                        <div className="textInfoF">
                            <h1>Redes</h1>
                        </div>
                        <div className="contenedorInformacion">
                            <div className="contInfo">
                                <div className="intoInfoFooter">
                                    <FaFacebook className='footerIcon' />
                                    <p>/nombredelfacebook</p>
                                </div>
                                <div className="intoInfoFooter">
                                    <AiOutlineInstagram className='footerIcon' />
                                    <p>/nombredelinstagram</p>
                                </div>
                            </div>
                            <div className="contInfo">
                                <div className="intoInfoFooter">
                                    <FiTwitter className='footerIcon' />
                                    <p>/nombredeltwitter</p>
                                </div>
                                <div className="intoInfoFooter">
                                    <TbBrandTelegram className='footerIcon' />
                                    <p>/nombredeltelegram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;