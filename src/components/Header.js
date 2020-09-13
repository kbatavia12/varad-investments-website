import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className = "header">
            <div className = "header__titleContainer" >
                <h1>Varad Investments</h1>
            </div>
            <div className = "header__components" >
                    <Link to = "/about" className = "link" >
                        <h3>About</h3>
                    </Link>
                    
                    <Link to = "/contact" className = "link">
                        <h3>Contact</h3>
                    </Link>
            </div>
        </div>
    );
}

export default Header;
