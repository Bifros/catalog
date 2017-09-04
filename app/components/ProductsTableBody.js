import React from 'react';

const ProductsTableBody = (props) => (
    <tbody>
        {
            props.products.length > 0 ?
            props.products.map((product, index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{product.id}</td>
                    <td>{product.description}</td>
                    <td>{product.units}</td>
                </tr>
            )) : (<tr key={1000}>
                    <th></th>
                    <td></td>
                    <td style={{textAlign: 'center'}}>No results</td>
                    <td></td>
                </tr>)
        }
  </tbody>
);

export default ProductsTableBody;
