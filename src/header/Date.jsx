import {Component} from 'react';

class Today extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleDateString()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval( () => {
            this.setState({
                date: new Date().toLocaleDateString()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    render() {
        return (
            this.state.date
        );
    }
}

export default Today;