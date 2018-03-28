import Article from './Article';

describe('Article', () => {

    it('default values', () => {
        expect( new Article({})).toEqual({ id: 0, title: '', picture: '', plot: '', tag: '', like: false });
    });
});
