export default class Article {
    constructor({ id = 0, title = '', picture = '', plot = '', tag = '', like = false }) {
        this.id = id;
        this.title = title;
        this.picture = picture;
        this.plot = plot;
        this.tag = tag;
        this.like = like;
    }
}
