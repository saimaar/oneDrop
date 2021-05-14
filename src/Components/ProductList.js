import React, {useState} from 'react'
import {Table} from 'semantic-ui-react'


const ProductList = (props) => {
    

    return(
        <Table>
           <Table.Cell>{props.product.title}</Table.Cell>
        </Table>
    )
}

export default ProductList;