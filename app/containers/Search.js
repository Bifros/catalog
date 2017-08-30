import React from 'react';
import Autosuggest from 'react-autosuggest';
// import ProductPreview from '../components/ProductPreview';
import ProductsTable from '../components/ProductsTable';
require('../styles/autosuggest.css');


export default class Search extends React.Component {

    constructor(props) {
        super(props);

        this.products = this.props.products;
        this.foundProduct = 'No products found.';
        this.isProductFound = false;

        this.state = {
            value: '',
            suggestions: []
        };
    }

    getSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.products.filter(product =>
            product.description.toLowerCase().slice(0, inputLength) === inputValue
        );
    }

    getSuggestionValue(suggestion) {
        return suggestion.description;
    }

    renderSuggestion(suggestion) {
        return (
            <div>
                {suggestion.description}
            </div>

        );
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionSelected = (event, {suggestionValue}) => {
        const found = this.props.findBy(suggestionValue);
        // this.foundProduct = (<ProductPreview {...found[0]} />);
        this.foundProduct = found;
        this.isProductFound = true;
    };


    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Type the name of the product',
            value,
            onChange: this.onChange
        };

        return (
            <div>
                <h3 className="search-title">Search: </h3>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    onSuggestionSelected={this.onSuggestionSelected}
                    getSuggestionValue={this.getSuggestionValue.bind(this)}
                    renderSuggestion={this.renderSuggestion.bind(this)}
                    inputProps={inputProps}
                />
                <div id="found-products" className="centered search-results">
                    {this.isProductFound ? 'Search results:' : ''}
                    <ProductsTable show={this.isProductFound} products={this.foundProduct} />
                </div>
            </div>
        );
    }

}
