import React from 'react';
import '../SetupTests';
import { shallow, mount } from 'enzyme';
import Articles from './Articles';

describe('<Articles />', () => {

    beforeAll(() => {
        fetch.mockResponse(JSON.stringify([]));
    });


    it('renders without crashing', () => {
        shallow(<Articles />);
    });

    it('has empty array as a default state value for "articles"', () => {
        const articles = shallow(<Articles />);
        expect(articles.instance().state.articles instanceof Array).toBe(true);
        expect(articles.instance().state.articles.length === 0).toBe(true);
    });

    it('has method loadArticle', () => {
        const articles = shallow(<Articles />);
        expect(articles.instance().loadArticle instanceof Function).toBe(true);
    });

    it('has loadArticle be called on componentDidMount', () => {
        const spy = jest.spyOn(Articles.prototype, 'loadArticle');
        shallow(<Articles />);
        expect(spy).toHaveBeenCalled();
        spy.mockReset();
        spy.mockRestore();
    });

    it('has method handleLike', () => {
        const articles = shallow(<Articles />);
        expect(articles.instance().handleLike instanceof Function).toBe(true);
    });

});
