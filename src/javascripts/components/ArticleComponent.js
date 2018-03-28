import React, {Component} from 'react';
import PropTypes from "prop-types";
import Article from "../class/Article";

export default class ArticleComponent extends Component {

    static get propTypes() {
        return {
            article: PropTypes.instanceOf(Article).isRequired,
            handleLike: PropTypes.func.isRequired,
        };
    }

    static get defaultProps() {
        return {
            article: new Article({}),
            handleLike: () => {},
        };
    }

    render() {
        return (
            <div className="article col-sm-6 col-md-4">
                <h2>{this.props.article.title}</h2>
                <p><img src={this.props.article.picture} className="img-responsive img-thumbnail" alt=""/></p>
                <p><span className="label label-primary">{this.props.article.tag}</span></p>
                <p>{this.props.article.plot}</p>
                <p>
                    <a className={`article--like btn ${this.props.article.like ? 'btn-success' : 'btn-default'}`} onClick={this.props.handleLike}>
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                    </a>
                </p>
            </div>
        );
    }
}
