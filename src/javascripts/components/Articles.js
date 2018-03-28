import React, {Component} from 'react';
import ArticleComponent from './ArticleComponent';
import Article from '../class/Article';

export default class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = { articles: [] };
    }

    loadArticle() {
        fetch('/stubs/articles.json')
            .then(response => response.json())
            .then(myJson => {
                this.setState({
                    articles: myJson.map((article) =>
                        new Article(article)
                    )
                })
            })
            .catch(error => console.error(error));
    }

    componentDidMount() {
        this.loadArticle();
    }

    handleLike(article) {
        fetch('/stubs/like.json')
            .then(response => response.json())
            .then(myJson => {
                this.setState({ articles: this.state.articles.map((art) => {
                    return art.id === article.id ? new Article({ ...art, like: true }) : art;
                })});
            })
            .catch(error => console.error(error));
    }

    renderArticles() {
        return this.state.articles.map((article) =>
            <ArticleComponent key={article.id} article={article} handleLike={()=>this.handleLike(article)} />
        );
    }

    render() {
        return (
            <div className="row articles">
                {this.renderArticles()}
            </div>
        );
    }
}
