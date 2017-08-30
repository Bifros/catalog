import React from 'react';
import ProductsTableBody from '../components/ProductsTableBody';

class ProductsTable extends React.Component {

    render() {
        return this.props.show === true ? (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Units</th>
                    </tr>
                </thead>
                <ProductsTableBody products={Array.isArray(this.props.products) ? this.props.products : []} />
            </table>
        ) : (<div>Nothing found</div>);
    }

}

export default ProductsTable;
