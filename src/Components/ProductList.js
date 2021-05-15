import React, {useState} from 'react'
import {Table} from 'semantic-ui-react'


const ProductList = (props) => {
    // console.log(props.product.variants[0].price)
    return(
        <>
           <Table.Cell>{props.product.title}</Table.Cell>

           <Table.Cell>{props.product.variants[0].price}</Table.Cell>
        </>
    )
}

export default ProductList;