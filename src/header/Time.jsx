import {Component} from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval( () => {
            this.setState({
                time: new Date().toLocaleTimeString()
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

export default Time;