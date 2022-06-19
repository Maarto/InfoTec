export default function ContactPage() {

    return (

        <>
            <div className="contactContainer">
                <div className="contactAll">

                    <div className="contactTextInformation">
                        <h1>Contáctenos</h1>
                        <p>Puede utilizar este espacio para solventar sus dudas sobre nuestra empresa / servicios.</p>
                        <p>Haremos todo lo posible por darle respuesta a la brevedad.</p>
                    </div>

                    <div className="contactForm">
                        <form action="">
                            <div className="contactInput">
                                <p>Nombre y Apellido *</p>
                                <input type="text" name="NameSuName" id="" placeholder="Juan Carlos Perez" required={true} />
                            </div>
                            <div className="contactInput">
                                <p>Número de teléfono</p>
                                <input type="tel" name="phoneNumber" id="" placeholder="+54221xxxxxxx" required={true} />
                            </div>
                            <div className="contactInput">
                                <p>Email *</p>
                                <input type="email" name="NameSuName" id="" placeholder="email@hotmail.com" required={true} />
                            </div>
                            <div className="contactInput">
                                <p>¿Tiene WhatsApp?</p>
                                <input type="text" name="WhatsApp" id="" placeholder="Si / No" />
                            </div>
                            <div className="contactInput">
                                <p>Asunto*</p>
                                <input type="text" name="Asunto" id="" placeholder="Compra / Servicio" required={true} />
                            </div>
                            <div className="contactInput">
                                <p>Mensaje *</p>
                                <textarea placeholder="Descripción del mensaje"/>
                            </div>

                            <button>Enviar</button>
                        </form>
                    </div>


                </div>

            </div>
        </>

    )

}