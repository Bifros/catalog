import React from 'react';
import {Link} from 'react-router-dom';

const ListCategory = (props) => (
    <li>
        <Link to={`/category/${props.to}`}>{props.description}</Link>
    </li>
);

export default ListCategory;
