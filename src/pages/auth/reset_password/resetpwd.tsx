import { Link } from 'react-router-dom'

export default function ResetPasswordPage() {
    return (

        <>
            <div className="resetPasswordContainer">
                <div className="allContainerRPWD">
                    <form action="">
                        <p>Correo electrónico</p>
                        <input type="email" placeholder="email@example.com" required={true} />
                    </form>
                    <div className="resetpwd_btn_a">
                        <button>Enviar</button>
                        <Link to={'/auth/login'}>Volver al inicio de sesión</Link>
                    </div>
                </div>
            </div>
        </>
    )
}