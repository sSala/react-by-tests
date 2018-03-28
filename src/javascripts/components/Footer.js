import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {

    static get propTypes() {
        return {
            coopyrightYear: PropTypes.number.isRequired,
            coopyrightCompany: PropTypes.string.isRequired,
        };
    }

    static get defaultProps() {
        return {
            coopyrightYear: 2018,
            coopyrightCompany: 'Company, Inc.',
        };
    }

    render() {
        return (
            <footer>
                <p>&copy; {`${this.props.coopyrightYear} ${this.props.coopyrightCompany}`} </p>
            </footer>
        );
    }
}
