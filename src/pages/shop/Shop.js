import { useEffect, useState } from "react"
import Axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import { Link } from 'react-router-dom'

function Shop() {

    let [products, setProducts] = useState([])
    let [categories, setCategories] = useState([])
    let [loading, setLoading] = useState(true)
    let [activeCat, setActiveCat] = useState(0)
    let [activeCount, setActiveCount] = useState(0)

    async function getProducts() {
        await Axios.get('https://dummyjson.com/products')
            .then(res => res)
            .then(data => {
                setLoading(false);
                setProducts(data.data.products);
                console.log(data.data.products);
            })
            .catch(err => {
                console.log(err);
            })
    }

    async function getCategory() {
        await Axios.get('https://dummyjson.com/products/categories')
            .then(res => res)
            .then(data => {
                setLoading(false);
                setCategories(data.data);
                console.log(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (loading) {
            getProducts()
            getCategory()
        }
    })

    return (
        <>
            {
                loading
                    ? <Spinner loading={loading} />
                    : <div className="containerAllShop">

                        <div className="pagesCounter">
                            <ul>
                                <li>Anterior</li>
                                <li className="pagesActive">1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>Siguiente</li>
                            </ul>
                        </div>
                        <div className="containerCatCards">

                            <div className="izqListShop">
                                <ul>
                                    <p>Categorias</p>
                                    {
                                        categories.length > 0 && categories.map((cat, i) => {
                                            
                                            return (
                                                <li key={i} className={activeCat === i ? 'activeCategory' : ''}>
                                                    <Link to={'/shop'} className={activeCat === i ? 'enabled' : 'disabled'}
                                                    onClick={() => setActiveCat(i)}>{cat}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="ListShop">
                                {
                                    products.length > 0 && products.map((product) => {
                                        return (
                                            <div key={product.id} className='cardShop'>
                                                <img src={product.images[1]} alt={product.name} width='100px' height='100px' />
                                                <div className="cardShopInfo">
                                                    <h1>{product.title}</h1>
                                                    <p>{product.description}</p>
                                                    <p className="priceProduct">${product.price}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
            }
        </>
    )

}

export default Shop;