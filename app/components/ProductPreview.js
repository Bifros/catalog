import React from 'react';
import PropTypes from 'prop-types';

const ProductPreview = ({ description, id, units }) => (
    <div>
        <div>
            Product:
            <b>{description}</b>
        </div>
        <div>
            ID: <b>{id}</b>
        </div>
        <div>
            Units: <b>{units}</b>
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
