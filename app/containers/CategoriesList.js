import React from 'react';
import CategoriesListComponent from '../components/CategoriesListComponent';
import {Link} from 'react-router-dom';

require('../styles/accordion.css');

export default class Categories extends React.Component {

    getCategoriesListObj() {
        return [
            {
                'Cloth and linen products': [
                    {
                        'Bed Acessories': [
                            '100% Acryl blankets', 'Bed sheets non-ironing',
                            'Bed sheets white', 'Bed spreads', 'Blankets rayon-acryl',
                            'Blankets wool 100%', 'Mattress Covers', 'Mattresses', 'Mattresses and foundations',
                            'Pillow cases', 'Pillows'
                        ]
                    },
                    {
                        'Cook & Steward Wears': [
                            'Bow ties', 'Cook & steward coat', 'Cook & steward trousers',
                            'Cooks apron', 'Cooks caps', 'Shirts'
                        ]
                    },
                    {
                        'Curtains': [
                            'Door Curtains', 'Flame Retardant Curtains', 'Porthole Curtains',
                            'Roller Blinders', 'Shower Curtains'
                        ]
                    },
                    {
                        'Laundry Accessories': [
                            'Coat hangers', 'Laundry lines', 'Laundry pinches', 'Plastic storage baskets'
                        ]
                    },
                    {
                        'Towel & Table Linen': [
                            'Duster cloth', 'Glass cloth', 'Hook & Loop Tapes', 'Moltplain foam rubber',
                            'Mutton cloth', 'Non-skid sheeting', 'Pantry cloth', 'Table cloth plastic', 
                            'Table cloth transparent', 'Table Cloth', 'Towels'
                        ]
                    }
                ]
            },
            {
                'Tableware & Gallery Utensils': [
                    {
                        'Baker & Pastry Utensils': [
                            'Angel cake pans', 'Bread pans', 'Dough scrapers', 'Doughnut cutters',
                            'Jelly moulds', 'Loaf tins', 'Muffin pans', 'Pastry bags', 'Pastry boards',
                            'Pastry brushes', 'Pastry cutters', 'Pastry Jaggers', 'Pastry tube sets',
                            'Pie pans', 'Pudding moulds', 'Rolling pins hard wood', 'Spring release cake tins',
                            'Tin layer cake pans'
                        ]
                    },
                    {
                        'Bar Untensils': [
                            'Coasters', 'Cocktail glasses with strainers', 'Muddlers',
                            'Non-drip measure and brackets', 'Pourring measures', 'Stainless steel cocktail shakers',
                            'Stainless steel jigger cups'
                        ]
                    },
                    {
                        'Buckets & Garbage Bags': [
                            'Bucket stainless steel', 'Disposable paper bags', 'Dust pans', 'M'
                        ]
                    },
                    {
                        'Butchers Gear': []
                    },
                    {
                        'Cabin Cleaning Equipment': []
                    },
                    {
                        'Cooking Machines': []
                    },
                    {
                        'Cutlery': []
                    },
                    {
                        'Electric Cooking Appliances': []
                    },
                    {
                        'Flower Vases': []
                    },
                    {
                        'Foils & Roll Papers': []
                    },
                    {
                        'Frying Pans & Cooking Pots': []
                    },
                    {
                        'Gallery Cheaning Equipment': []
                    },
                    {
                        'Garbage Disposers': []
                    },
                    {
                        'Home Electrical Appliances': []
                    },
                    {
                        'Ice Instruments': []
                    },
                    {
                        'Japanese Style Baskets': []
                    },
                    {
                        'Japanese Style Kitchen Utensils': []
                    },
                    {
                        'Japanese Style Pans & Ladles': []
                    },
                    {
                        'Japanese Style Tableware': []
                    },
                    {
                        'Kitchen Utensils': []
                    },
                    {
                        'Knives': []
                    },
                    {
                        'Korean Style Tableware': []
                    },
                    {
                        'Large Volume Laundry Machine': []
                    },
                    {
                        'Measuring Scales': []
                    },
                    {
                        'Napkin papers': []
                    },
                    {
                        'Peelers & Scalers': []
                    },
                    {
                        'Plates & Cups': []
                    },
                    {
                        'Rat Traps & Fly Swatters': []
                    },
                    {
                        'Roasting Pans, Mixing Bowls & Strainers': []
                    },
                    {
                        'Serving Utensils': []
                    },
                    {
                        'Sharpening Stones': []
                    },
                    {
                        'Smoking Goods': []
                    },
                    {
                        'Squeezers & Mashers': []
                    },
                    {
                        'Storage Containers': []
                    },
                    {
                        'Tableware': []
                    }
                ],

            },
            {
                'Clothing': []
            },
            {
                'Rope & Hawsers': []
            },
            {
                'Rigging Equipment & General Deck Items': []
            },
            {
                'Marine Paint': []
            },
            {
                'Painting Equipment': []
            },
            {
                'Safety Protective Gear': []
            },
            {
                'Safety Equipment': []
            },
            {
                'Hoses & Couplings': []
            },
            {
                'Nautical Equipment': []
            },
            {
                'Medicine': []
            },
            {
                'Petroleum Products': []
            },
            {
                'Stationery': []
            },
            {
                'Hardware': []
            },
            {
                'Brushes & Mats': []
            },
            {
                'Lavatory Equipment': []
            },
            {
                'Cleaning Material & Chemicals': []
            },
            {
                'Pneumatic & Electrical Tools': []
            },
            {
                'Hand Tools': []
            },
            {
                'Cutting Tools': []
            },
            {
                'Measuring Tools': []
            },
            {
                'Screws & Nuts': []
            },
            {
                'Pipes & Tubes': []
            },
            {
                'Pipe & Tube Fittings': []
            },
            {
                'Valves & Cocks': []
            },
            {
                'Bearings': []
            },
            {
                'Electrical Equipment': []
            },
            {
                'Packing & Jointing': []
            },
            {
                'Welding Equipment': []
            },
            {
                'Machinery Equipment': []
            },
            {
                'Welfare Ittems': []
            },
            {
                '00 & 10 Provisions and slop chest': []
            }
        ];
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
            
            return this.isActiveSubCategory(category) ? (
                <li key={index} className="category-header padded-40 sub-category">
                    <Link to={`/products/${subCategoryName.split(' ').join('_').replace(/[^\w\s]/gi, '')}`}>{subCategoryName}</Link>
                </li>
            ) : (
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
    
    isActiveSubCategory() {
        return false;
    }

    render() {
        return(
            <CategoriesListComponent
                renderCategoriesList={this.renderCategoriesList.bind(this)}
            />
        );
    }

}
