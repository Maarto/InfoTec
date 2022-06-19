import { BiError } from 'react-icons/bi'

function Error() {

    function errorType() {
        return ('404')
    }

    return (
        <div className="errorContainer">
            <div className="errorInfoContainer">
                <BiError className='errorIcon' />
                <h1>Error {errorType()}</h1>
                <p>La página a la que intentas ingresar es inexistente</p>
            </div>
        </div>
    )
}

export default Error;