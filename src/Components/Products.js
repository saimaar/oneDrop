import React, {useState, useEffect} from 'react'
import {Table} from 'semantic-ui-react'
import ProductList from './ProductList'

const Products = () => {
    let url = 'https://onedrop.today/products.json'
    let [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(jsonObj => {
            setProducts(jsonObj.products)
        })
    },[url])

    let filteredProducts = products.filter(product => product.variants[0] !== "0.00")
            
    let productList = filteredProducts.map(product =>
         <Table.Row><ProductList product={product}/></Table.Row>)
    return(
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Product</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                    </Table.Row>
                 </Table.Header>
                 <Table.Body>
                    {productList}
                 </Table.Body>
            </Table>
        </div>
    )

}

export default Products;
