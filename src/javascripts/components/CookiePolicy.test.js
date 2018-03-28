import React from 'react';
import PropTypes from 'prop-types';
import '../SetupTests';
import { shallow } from 'enzyme';
import CookiePolicy from './CookiePolicy';

describe('<CookiePolicy />', () => {

    it('renders without crashing', () => {
        shallow(<CookiePolicy />);
    });

    it('has "cookiePolicyPrependText" a required string propTypes', () => {
        expect(CookiePolicy.propTypes.cookiePolicyPrependText).toBe(PropTypes.string.isRequired);
    });

    it('has "cookiePolicyLinkText" a required string propTypes', () => {
        expect(CookiePolicy.propTypes.cookiePolicyLinkText).toBe(PropTypes.string.isRequired);
    });

    it('has "cookiePolicyAppendText" a required string propTypes', () => {
        expect(CookiePolicy.propTypes.cookiePolicyAppendText).toBe(PropTypes.string.isRequired);
    });

    it('has "This is a cookie policy click" as a defaultProp for "cookiePolicyPrependText"', () => {
        expect(CookiePolicy.defaultProps.cookiePolicyPrependText).toBe('This is a cookie policy click');
    });

    it('has "here" as a defaultProp for "cookiePolicyLinkText"', () => {
        expect(CookiePolicy.defaultProps.cookiePolicyLinkText).toBe('here');
    });

    it('has "to close it." as a defaultProp for "cookiePolicyAppendText"', () => {
        expect(CookiePolicy.defaultProps.cookiePolicyAppendText).toBe('to close it.');
    });

    it('has false as a default state value for "hide"', () => {
        const cookiePolicy = shallow(<CookiePolicy />);
        expect(cookiePolicy.instance().state.hide).toBe(false);
    });

    it('CookiePolicy is hidden after the click on cookie-policy--close link', () => {
        const cookiePolicy = shallow(<CookiePolicy />);
        expect(cookiePolicy.find('.cookie-policy').hasClass('hide')).toBe(false);
        cookiePolicy.find('.cookie-policy--close').simulate('click');
        expect(cookiePolicy.find('.cookie-policy').hasClass('hide')).toBe(true);
    });
});
