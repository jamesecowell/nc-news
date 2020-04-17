import React from 'react';
import * as api from '../utils/api';
import ArticleHead from './ArticleHead';
import CommentList from './CommentList';
import Loader from './Loader';
import ErrorPage from './ErrorPage';

class ArticleBody extends React.Component {
  state = {
    article: {},
    isLoading: true,
    hasError: false,
  };

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchSingleArticle(article_id);
  }

  fetchSingleArticle = (article_id) => {
    api
      .getSingleArticle(article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        this.setState({ hasError: true, isLoading: false });
      });
  };

  render() {
    const { article, isLoading, hasError } = this.state;
    const { article_id, username } = this.props;
    if (isLoading) return <Loader />;
    if (hasError) return <ErrorPage />;
    return (
      <div className="ArticleBody">
        <ArticleHead article={article} />
        <p>{article.body}</p>
        <CommentList article_id={article_id} username={username} />
      </div>
    );
  }
}

export default ArticleBody;
