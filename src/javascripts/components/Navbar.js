import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component {

    static get propTypes() {
        return {
            projectName: PropTypes.string.isRequired,
        };
    }

    static get defaultProps() {
        return {
            projectName: 'Project name',
        };
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <a className="navbar-brand">{this.props.projectName}</a>
                </div>
            </nav>
        );
    }
}
