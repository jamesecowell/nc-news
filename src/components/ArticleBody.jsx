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
    articleError: null,
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
        const { status, data } = err.response;
        this.setState({
          articleError: { status: status, msg: data.msg },
          isLoading: false,
        });
      });
  };

  render() {
    const { article, isLoading, articleError } = this.state;
    const { article_id, username } = this.props;
    if (isLoading) return <Loader />;
    if (articleError)
      return <ErrorPage status={articleError.status} msg={articleError.msg} />;
    return (
      <div className="content">
        <ArticleHead article={article} />
        <p>{article.body}</p>
        <CommentList article_id={article_id} username={username} />
      </div>
    );
  }
}

export default ArticleBody;
