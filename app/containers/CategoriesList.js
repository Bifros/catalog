import React from 'react';
import CategoriesListComponent from '../components/CategoriesListComponent';
// import ListCategory from '../components/ListCategory';
import {Link} from 'react-router-dom';

require('../styles/accordion.css');

export default class Categories extends React.Component {

    getCategoriesListObj() {
        return [
            {
                'Cloth and linen products': [
                    {
                        'Bed Acessories': [
                            '100% Acryl blankets', 'Bed sheets non-ironing'
                        ]
                    },
                    {
                        'Cook & Steward Wears': [
                            'Bow ties', 'Shirts'
                        ]
                    }
                ]
            },
            {
                'Tableware & Gallery Utensils': [
                    {
                        'Baker & Pastry Utensils': [
                            'Angel cake pans', 'bread pans'
                        ]
                    },
                    {
                        'bar Untensils': [
                            'Coasters', 'Muddlers'
                        ]
                    }
                ]
            }
        ];
    }

    renderCategoriesList() {
        const list = this.getCategoriesListObj().map((mainCategory, index) => {
            return this.renderCategory(mainCategory, index);
        });

        return list;
    }

    renderCategory(category) {
        const categoryName = Object.keys(category)[0];
        const subCategories = Object.values(category)[0];

        return (
            <li>
                <input type="checkbox" defaultChecked={true} />
                <i></i>
                <div className="category-header main-category padded-20">{categoryName}</div>
                <ul className="inner-category">{this.wrapSubCategories(subCategories)}</ul>
            </li>
        );
    }

    wrapSubCategories(categoriesArray) {
        return categoriesArray.map(category => {
            const subCategoryName = Object.keys(category);
            const subCategorySpecs = this.wrapProductSpecs(Object.values(category));
            
            return (
                <li>
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
            return productSpec.map(spec => {
                const productCategoryLink = spec.split(' ').join('_').replace(/[^\w\s]/gi, '');
                return (
                    <li className="padded-60 category-product">
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
