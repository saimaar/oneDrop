import React from 'react';
import {Table} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const ProductList = (props) => {
  return(
    <>
      <Table.Cell>{props.product.title}</Table.Cell>
      <Table.Cell>{props.product.variants[0].price}</Table.Cell>
    </>
  );
};

export default ProductList;

ProductList.prototype = {
  product: PropTypes.shape({
    variants: PropTypes.array,
    title: PropTypes.string
  })
}
