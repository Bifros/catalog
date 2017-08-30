import React from 'react';

const CategoriesListComponent = (props) => (
    <div className="col-md-4" style={{marginTop: '70px'}}>
        <h3>Categories:</h3>
        <ul className="accordion">
            {props.renderCategoriesList()}
        </ul>
    </div>
);

export default CategoriesListComponent;
