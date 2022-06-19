import HashLoader from 'react-spinners/HashLoader'

function Spinner({ loading }) {
    return (
        <div className="loadingSign">
            <HashLoader
                size={100}
                color={'#ffbb55'}
                loading={loading}
            />
            <h1>Cargando...</h1>
        </div>
    )
}

export default Spinner;