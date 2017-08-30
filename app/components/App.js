import React from 'react';
// import { Link } from 'react-router-dom';
// import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = () =>
    <div className="container">
        <h1>Catalog App</h1>
        {/* <footer className={footer}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </footer> */}
        { Routes }
    </div>;

export default App;
