import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <p>&copy; {`${this.props.coopyrightYear} ${this.props.coopyrightCompany}`} </p>
            </footer>
        );
    }
}
