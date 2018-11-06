import React, {Component} from 'react';
import Weather from './Weather';
import Time from './Time';
import Today from './Date';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Time />
                <h1>Good Morning!</h1>
                <h4>It is currently <Weather /> on <Today />.</h4>
            </div>
        )
    }
}

export default Header;