import React from 'react';
import PropTypes from 'prop-types';
import '../SetupTests';
import {shallow} from 'enzyme';
import Navbar from './Navbar';

describe('<Navbar />', () => {

    it('renders without crashing', () => {
        shallow(<Navbar />);
    });

    it('has "projectName" a required string propTypes', () => {
        expect(Navbar.propTypes.projectName).toBe(PropTypes.string.isRequired);
    });

    it('has "Project name" as a defaultProp for "projectName"', () => {
        expect(Navbar.defaultProps.projectName).toBe('Project name');
    });
});
