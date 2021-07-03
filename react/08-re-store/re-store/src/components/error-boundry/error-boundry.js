import React, {Component} from 'react';
import ErrorEndicator from "../error-endicator";

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <ErrorEndicator/>;
        }

        return this.props.children;
    }
};