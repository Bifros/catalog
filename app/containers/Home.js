import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import Search from './Search';
import CategoriesList from './CategoriesList';

@connect(
    store => ({
        products: store.products.products || []
    })
)
export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            productsToDisplay: this.props.products,
            showProductsTable: true
        };
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
        const alphabetElms = alphabetArray.map((letter, index) => 
            <a key={index} className="" onClick={this.handleAlphabetClick.bind(this)}> {letter.toUpperCase()} </a>
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
                    <HomeComponent
                        renderAlphabetRubrics={this.renderAlphabetRubrics.bind(this)}
                        productsToDisplay={this.state.productsToDisplay}
                        showProductsTable={this.state.showProductsTable}
                    />
                </div>
                <CategoriesList
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
