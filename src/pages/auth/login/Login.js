import { Link } from 'react-router-dom'

function Login() {

    return (
        <div className="loginAllContainer">
            <div className="containerLogin">
                <form>
                    <p>Correo electrónico</p>
                    <input type="email" required={true} placeholder='email@example.com' />
                    <p>Contraseña</p>
                    <input type="password" required={true} placeholder='***********' />
                    <button>Iniciar Sesión</button>
                </form>
                <Link to={'/auth/register'}>¿No tienes cuenta?</Link>
                <Link to={'/auth/reset_password'}>¿Olvidaste tu contraseña?</Link>
            </div>
        </div>
    )

}

export default Login;