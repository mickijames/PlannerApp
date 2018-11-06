import React, {Component} from 'react';
import Item from './Item';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <p>Body Content Goes Here.</p>
                <Item />
            </div>
        )
    }
}

export default Main;