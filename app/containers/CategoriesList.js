import React from 'react';
import CategoriesListComponent from '../components/CategoriesListComponent';
import ListCategory from '../components/ListCategory';

export default class Categories extends React.Component {

    getCategoriesListObj() {
        return {
            'Cloth and linen products': [
                'Bed Acessories', 'Cook & Steward Wears'
            ],
            'Tableware & Gallery Utensils': [
                'Baker & Pastry Utensils', 'bar Untensils'
            ]
        };
    }

    getSubCategory() {}

    getProductsBySubCategory(productsList, productSubCategory) {
        let products = productsList.filter(product => product.subCategory === productSubCategory);

        if (products.length === undefined) {
            products = [products];
        }

        return products;
    }

    getProductBySpecification(productsList, productSecification) {
        return productsList.filter(product => product.specification === productSecification)[0];
    }

    renderCategoriesList() {
        const list = [];
        const categoriesList = this.getCategoriesListObj();

        for (const [category, subCategories] of Object.entries(categoriesList)) {
            list.push(this.renderCategory(category, subCategories));
        }

        return list;
    }

    renderCategory(category, subCategories) {
        const subCategoriesList = this.renderSubcategories(subCategories);

        return (<li>{category} {subCategoriesList}</li>);
    }

    renderSubcategories(subCategories) {
        const list = [];

        subCategories.map((subCategory, index) => {
            list.push(
                <ListCategory
                    key={index}
                    to={index}
                    description={subCategory}
                />
            );
        });

        return (<ul>{list}</ul>);
    }

    // onSubCategoryClick(e) {
    //     const subCategoryName = e.target.text;

    // }

    render() {
        return(
            <CategoriesListComponent
                renderCategoriesList={this.renderCategoriesList.bind(this)}
            />
        );
    }

}
