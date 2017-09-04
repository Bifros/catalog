import React from 'react';
import ProductsTable from './ProductsTable';

const HomeComponent = ({ renderAlphabetRubrics, showProductsTable, productsToDisplay }) => (
    <div>
        <div style={{textAlign: 'center'}}>
            {renderAlphabetRubrics()}
            <ProductsTable show={showProductsTable} products={productsToDisplay} />
        </div>
    </div>
);

export default HomeComponent;
