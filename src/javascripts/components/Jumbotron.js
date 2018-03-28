import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Jumbotron extends Component {

    static get propTypes() {
        return {
            title: PropTypes.string.isRequired,
            paragraph: PropTypes.string.isRequired,
        };
    }

    static get defaultProps() {
        return {
            title: 'Hello, world!',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        };
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.paragraph}</p>
                    <p>{this.props.children}</p>
                </div>
            </div>
        );
    }
}
