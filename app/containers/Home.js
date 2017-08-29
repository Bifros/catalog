import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import { filterTable } from '../actions';
import HomeComponent from '../components/HomeComponent';
import ProductPreview from '../components/ProductPreview';
// import { filterableTable } from '../styles/filterableTable.scss';
// import {products as fakeProducts} from '../data/products';
// import * as productsActions from '../actions/products';
import Search from './Search';
import CategoriesList from './CategoriesList';

@connect(
    store => ({
        products: store.products.products || []
    })
)
export default class Home extends React.Component {

    componentWillMount() {}

    renderProducts() {
        return this.props.products.map((product, index) =>
            <ProductPreview
                key={index}
                {...product}
            />
        );
    }

    findBy(suggestionValue) {
        const found = this.props.products.filter((product) =>
            product.description === suggestionValue
        );

        if (found) {
            return found;
        }

        return 'No results';
    }

    render() {
        return (
            <div>
                <Search
                    products={this.props.products}
                    findBy={this.findBy.bind(this)}
                />
                <CategoriesList
                    products={this.props.products}
                />
                <HomeComponent
                    renderProducts={this.renderProducts.bind(this)}
                    products={this.props.products}
                />
            </div>
        );
    }

}

Home.propTypes = {
    products: PropTypes.array,
    actions: PropTypes.object,
    fetchProducts: PropTypes.func
};
