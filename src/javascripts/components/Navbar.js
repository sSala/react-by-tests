import React, {Component} from 'react';

export default class Navbar extends Component {

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
