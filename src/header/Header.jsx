import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>Good Morning!</h1>
                <h4>It is currently <DateTime />.</h4>
            </div>
        )
    }
}

class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval( () => {
            this.setState({
                time: new Date().toLocaleString()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    render() {
        return (
            this.state.time
        );
    }
}


export default Header;