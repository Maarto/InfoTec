import { useEffect, useState } from "react"
import axios from 'axios'
import { info } from "console"


export default function ShopPage() {

    let [products, setProducts] = useState([])
    
    
     
    
    useEffect(() => {

        axios.get('https://dummyjson.com/products').then((info) => {
            let data = info.data;
            setProducts(data.products)
            console.log(products)
        })

    }, [])

    // AKSJFAKSFJAL METODO TE EXPLOTO A VOS HIJO D PUTA LÑASKFLÑAKSFA- No la querúia bajar, pero foe xd

    return (

        <>
            <ul>
                {
                   
                }
            </ul>
            <p>ShopPage</p>
        </>

    )

}