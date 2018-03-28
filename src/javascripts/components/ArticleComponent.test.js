import React from 'react';
import PropTypes from 'prop-types';
import '../SetupTests';
import { shallow } from 'enzyme';
import ArticleComponent from './ArticleComponent';
import Article from "../class/Article";
import { assertPropTypes } from 'check-prop-types';

describe('<ArticleComponent />', () => {

    it('renders without crashing', () => {
        shallow(<ArticleComponent />);
    });

    it('has "article" a required Article propTypes', () => {
        assertPropTypes(ArticleComponent.propTypes, { article: new Article({}), handleLike: () => {} }, 'prop', ArticleComponent.article);
    });

    it('has "handleLike" a required function propTypes', () => {
        expect(ArticleComponent.propTypes.handleLike).toBe(PropTypes.func.isRequired);
    });

    it('has () => {} as a defaultProp for "handleLike"', () => {
        expect(ArticleComponent.defaultProps.handleLike).toBeInstanceOf(Function);
    });

    it('has link with class article--like presents', () => {
        const articleComponent = shallow(<ArticleComponent />);
        expect(articleComponent.find('.article--like').exists()).toBe(true);
    });

    it('prop handleLike is called after the click on article--like btn', () => {
        const props = { handleLike: jest.fn() };
        const articleComponent = shallow(<ArticleComponent {...props} />);
        articleComponent.find('.article--like').simulate('click');
        expect(props.handleLike).toHaveBeenCalled();
    });

});
