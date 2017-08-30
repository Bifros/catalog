import React from 'react';
import ProductsTable from './ProductsTable';

const HomeComponent = (props) => (
    <div>
        <div style={{textAlign: 'center'}}>
            {props.renderAlphabetRubrics()}
            <ProductsTable show={props.showProductsTable} products={props.productsToDisplay} />
        </div>
    </div>
);

export default HomeComponent;
