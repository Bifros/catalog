import React from 'react';
// import {Link} from 'react-router-dom';

const ListCategory = (props) => (
    <li>
        {props.name}
        <ul>
            {props.subCategories}
        </ul>
    </li>
);

export default ListCategory;
