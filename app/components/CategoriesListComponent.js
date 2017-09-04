import React from 'react';

const CategoriesListComponent = ({ renderCategoriesList }) => (
    <div className="col-md-4" style={{marginTop: '28px'}}>
        <h3 style={{fontSize: '22px', marginBottom: '18px'}}>Categories:</h3>
        <ul className="accordion">
            {renderCategoriesList()}
        </ul>
    </div>
);

export default CategoriesListComponent;
