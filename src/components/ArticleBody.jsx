import React from 'react';
import * as api from '../utils/api';
import ArticleHead from './ArticleHead';
import CommentList from './CommentList';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
import ArticleVoter from './ArticleVoter';

class ArticleBody extends React.Component {
  state = {
    article: {},
    isLoading: true,
    articleError: null,
    optimisticVotes: 0,
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
    const { article, isLoading, articleError, optimisticVotes } = this.state;
    const { article_id, username } = this.props;
    if (isLoading) return <Loader />;
    if (articleError)
      return <ErrorPage status={articleError.status} msg={articleError.msg} />;
    return (
      <div className="content">
        <ArticleHead
          article={article}
          votes={article.votes + optimisticVotes}
        />
        <ArticleVoter displayVote={this.displayVote} votes={article.votes} />
        <p>{article.body}</p>
        <CommentList article_id={article_id} username={username} />
      </div>
    );
  }

  displayVote = (inc_vote) => {
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + inc_vote };
    });
  };
}

export default ArticleBody;
