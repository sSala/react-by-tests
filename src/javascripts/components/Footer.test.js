import React from 'react';
import PropTypes from 'prop-types';
import '../SetupTests';
import {shallow} from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {

    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('has "coopyrightYear" a required numeric propTypes', () => {
        expect(Footer.propTypes.coopyrightYear).toBe(PropTypes.number.isRequired);
    });

    it('has "coopyrightCompany" a required string propTypes', () => {
        expect(Footer.propTypes.coopyrightCompany).toBe(PropTypes.string.isRequired);
    });

    it('has 2018 as a defaultProp for "coopyrightYear"', () => {
        expect(Footer.defaultProps.coopyrightYear).toBe(2018);
    });

    it('has "Company, Inc." as a defaultProp for "coopyrightCompany"', () => {
        expect(Footer.defaultProps.coopyrightCompany).toBe('Company, Inc.');
    });
});
