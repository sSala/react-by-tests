import React from 'react';
import PropTypes from 'prop-types';
import '../SetupTests';
import {shallow} from 'enzyme';
import Jumbotron from './Jumbotron';

describe('<Jumbotron />', () => {

    it('renders without crashing', () => {
        shallow(<Jumbotron />);
    });

    it('has "title" a required string propTypes', () => {
        expect(Jumbotron.propTypes.title).toBe(PropTypes.string.isRequired);
    });

    it('has "paragraph" a required string propTypes', () => {
        expect(Jumbotron.propTypes.paragraph).toBe(PropTypes.string.isRequired);
    });

    it('has "Hello, world!" as a defaultProp for "title"', () => {
        expect(Jumbotron.defaultProps.title).toBe('Hello, world!');
    });

    it('has "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." as a defaultProp for "paragraph"', () => {
        expect(Jumbotron.defaultProps.paragraph).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    });
});
