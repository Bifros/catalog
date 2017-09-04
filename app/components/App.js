import React from 'react';
// import { Link } from 'react-router-dom';
// import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = () =>
    <div>
        <div className="container" style={{borderBottom: '3px solid #000'}}>
            <h1>Marine Catalogue</h1>
        </div>
        <div className="container">
            {/* <footer className={footer}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </footer> */}
            { Routes }
        </div>
    </div>;

export default App;
