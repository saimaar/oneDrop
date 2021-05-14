import React, {useState, useEffect} from 'react'

function Products(params) {
    let url = 'https://onedrop.today/products.json'
    let [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(products => {
            setProducts(products)
        })
    },[url])
    
    console.log(products)
    return(
        <div>

        </div>
    )
    
}

export default Products;