import { useEffect, useState } from "react"
import Axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';

function Shop() {

    let [products, setProducts] = useState([])
    let [loading, setLoading] = useState(true)

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

    useEffect(() => {
        if (loading) getProducts()
    })

    return (
        <>
            {
                loading
                    ? <Spinner loading={loading} />
                    : <div className="container">
                        <h1>ShopPage</h1>
                        {
                            products.length > 0 && products.map((product) => {
                                return (
                                    <div key={product.id}>
                                        <h1>{product.name}</h1>
                                        <p>{product.description}</p>
                                        <p>{product.price}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </>
    )

}

export default Shop;