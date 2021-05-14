import React, {useState, useEffect} from 'react'
import { Table } from 'semantic-ui-react'
import ProductList from './ProductList'

const Products = () => {
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
            <Table/>
        </div>
    )
    
}

export default Products;