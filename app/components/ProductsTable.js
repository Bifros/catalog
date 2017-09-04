import React from 'react';
import ProductsTableBody from '../components/ProductsTableBody';

const ProductsTable = ({ products, show }) => {    
    return show === true ? (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Code</th>
                    <th>Description</th>
                    <th>Units</th>
                </tr>
            </thead>
            <ProductsTableBody products={Array.isArray(products) ? products : []} />
        </table>
    ) : (<div></div>);
};

export default ProductsTable;
