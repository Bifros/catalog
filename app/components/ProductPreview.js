import React from 'react';
import PropTypes from 'prop-types';

const ProductPreview = (props) => (
    <div>
        <div>
            Product:
            <b>{props.description}</b>
        </div>
        <div>
            ID: <b>{props.id}</b>
        </div>
        <div>
            Units: <b>{props.units}</b>
        </div>
    </div>
);

ProductPreview.PropTypes = {
    id: PropTypes.any,
    description: PropTypes.string,
    units: PropTypes.string,
    category: PropTypes.string
};

export default ProductPreview;
