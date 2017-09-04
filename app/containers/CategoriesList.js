import React from 'react';
import CategoriesListComponent from '../components/CategoriesListComponent';
import {Link} from 'react-router-dom';

require('../styles/accordion.css');

export default class Categories extends React.Component {

    getCategoriesListObj() {
        const categories = require('../data/categories');
        return categories;
    }

    renderCategoriesList() {
        const list = this.getCategoriesListObj().map((mainCategory, index) => {
            return this.renderCategory(mainCategory, index);
        });

        return list;
    }

    renderCategory(category, index) {
        const categoryName = Object.keys(category)[0];
        const subCategories = Object.values(category)[0];

        return (
            <li key={index} className="main-category-item">
                <input type="checkbox" defaultChecked={true} />
                <i></i>
                <div className="category-header main-category padded-20">{categoryName.substring(0, 30)}</div>
                <ul className="inner-category">{this.wrapSubCategories(subCategories)}</ul>
            </li>
        );
    }

    wrapSubCategories(categoriesArray) {
        return categoriesArray.map((category, index) => {
            const subCategoryName = Object.keys(category);
            const subCategorySpecs = this.wrapProductSpecs(Object.values(category));
            
            return (
                <li key={index}>
                    <input type="checkbox" defaultChecked={true} />
                    <i></i>
                    <div className="category-header padded-40 sub-category">{subCategoryName}</div>
                    <ul className="inner-category">{subCategorySpecs}</ul>
                </li>
            );
        });
    }

    wrapProductSpecs(specsArray) {
        return specsArray.map(productSpec => {
            return productSpec.map((spec, index) => {
                const productCategoryLink = spec.split(' ').join('_').replace(/[^\w\s]/gi, '');
                return (
                    <li key={index} className="padded-60 category-product">
                        <Link to={`/products/${productCategoryLink}`}>{spec}</Link>
                    </li>
                );
            });
        });
    } 

    render() {
        return(
            <CategoriesListComponent
                renderCategoriesList={this.renderCategoriesList.bind(this)}
            />
        );
    }

}
