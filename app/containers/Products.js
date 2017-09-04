import React from 'react';
import {connect} from 'react-redux';
import Search from './Search';
import CategoriesList from './CategoriesList';
import ProductsTable from '../components/ProductsTable';

@connect(
    (store, props) => ({
        products: store.products.products.filter(product => {
            return product.specification.split(' ').join('_').replace(/[^\w\s]/gi, '').toLowerCase() === props.match.params.productsLink.toLowerCase();
        }) || []
    })
)
export default class Products extends React.Component {

    constructor(props) {
        super(props);
        this.productsSpecName = this.props.products[0].specification;
    }

    componentWillMount() {}

    findBy(suggestionValue) {
        const found = this.props.products.filter((product) =>
            product.description === suggestionValue
        );

        if (found) {
            return found;
        }

        return 'No results';
    }

    renderAlphabetRubrics() {
        const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const alphabetElms = alphabetArray.map((letter) => 
            <a style={{cursor: 'pointer'}} className="" onClick={this.handleAlphabetClick.bind(this)}> {letter.toUpperCase()} </a>
        );
        return (<div className="alphabet-wrapper">{alphabetElms}</div>);
    }

    handleAlphabetClick(e) {
        const letter = e.target.text.trim();
        const foundByAlphabet = this.props.products.filter(
            product => product.description[0].toLowerCase() === letter.toLowerCase()
        );

        this.setState({
            productsToDisplay: foundByAlphabet,
            showProductsTable: true
        });
    }

    render() {
        return (
            <div>
                <div className="col-md-8">
                    <Search
                        products={this.props.products}
                        findBy={this.findBy.bind(this)}
                    />
                    <div className="products-by-category">
                        <h3 style={{fontSize: '22px', marginBottom: '18px'}}>{this.productsSpecName}(s):</h3>
                        <ProductsTable 
                            show={true}
                            products={this.props.products} 
                        />
                    </div>
                </div>
                <CategoriesList
                    products={this.props.products}
                />
            </div>
        );
    }
}
