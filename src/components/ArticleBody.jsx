import React from 'react';
import * as api from '../utils/api';
import ArticleHead from './ArticleHead';
import CommentList from './CommentList';

class ArticleBody extends React.Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getSingleArticle(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { article } = this.state;
    const { article_id } = this.props;

    return (
      <div className="ArticleBody">
        <ArticleHead article={article} />
        <p>{article.body}</p>
        <CommentList article_id={article_id} />
      </div>
    );
  }
}

export default ArticleBody;
