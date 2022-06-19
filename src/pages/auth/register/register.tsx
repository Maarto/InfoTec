import { Link } from 'react-router-dom'


export default function RegisterPage(){

    return (
        <div className="registerAllContainer">
            <div className="registerFormContainer">
                <form action="">
                    <div className="RegInputs">
                        <p>Nombre y Apellido</p>
                        <input type="text" placeholder='Juan Perez' required={true}/>
                    </div>
                    <div className="RegInputs">
                        <p>Correo electrónico</p>
                        <input type="text" placeholder='email@example.com' required={true}/>
                    </div>
                    <div className="RegInputs">
                        <p>Contraseña</p>
                        <input type="password" placeholder='*******' required={true}/>
                    </div>
                    <div className="RegInputs">
                        <p>Confirmar contraseña</p>
                        <input type="password" placeholder='*******' required={true}/>
                    </div>
                    <button>Registrarse</button>
                    <Link to={'/auth/login'}>Ya tengo cuenta</Link>
                </form>
            </div>
        </div>
    )

}