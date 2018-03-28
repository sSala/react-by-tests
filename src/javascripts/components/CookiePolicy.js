import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class CookiePolicy extends Component {

    constructor(props) {
        super(props);
        this.state = { hide: false };
        this.handleClose = this.handleClose.bind(this);
    }

    static get propTypes() {
        return {};
    }

    static get defaultProps() {
        return {};
    }

    handleClose() {
        // TODO update the state
    }

    render() {
        return (
            <div className={`cookie-policy ${this.state.hide ? 'hide' : ''}`}>
                <div className="container">
                    {this.props.cookiePolicyPrependText}&nbsp;
                    <a className="cookie-policy--close" onClick={this.handleClose}>{this.props.cookiePolicyLinkText}</a>&nbsp;
                    {this.props.cookiePolicyAppendText}
                </div>
            </div>
        );
    }
}
