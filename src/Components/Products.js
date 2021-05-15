import React, {useState, useEffect} from 'react';
import {Table} from 'semantic-ui-react';
import ProductList from './ProductList';

const Products = () => {
  const URL = 'https://onedrop.today/products.json';
  let [products, setProducts] = useState([]);

  useEffect(() => {
    let fetchProducts = () => {
      fetch(URL)
      .then(resp => resp.json())
      .then(jsonObj => setProducts(jsonObj.products))
    };

    fetchProducts();

    let intervalId = setInterval(fetchProducts, 60000);
    return () => clearInterval(intervalId);
  }, [])

  let filteredProducts = products.filter(product => product.variants[0] !== "0.00");
  let sortedProducts = filteredProducts.sort((productA, productB) => {
    if (Number(productA.variants[0].price) < Number(productB.variants[0].price)) {
      return 1;
    } else {
      return -1;
    }
  });               
  let productList = sortedProducts.map(product =>
    <Table.Row key={product.id}><ProductList product={product}/></Table.Row>)

  return(
    <div>
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
          {productList}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Products;
