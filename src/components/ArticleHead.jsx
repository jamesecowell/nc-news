import React from 'react';
import ArticleVoter from './ArticleVoter';

class ArticleHead extends React.Component {
  state = {
    optimisticVotes: 0,
  };

  render() {
    const { article } = this.props;
    const { optimisticVotes } = this.state;

    return (
      <div className="ArticleHead">
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <p>
          {article.votes + optimisticVotes} votes - created:{' '}
          {article.created_at} - {article.comment_count} comments
        </p>
        <ArticleVoter
          article_id={article.article_id}
          displayVote={this.displayVote}
        />
      </div>
    );
  }

  displayVote = (inc_vote) => {
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + inc_vote };
    });
  };
}

export default ArticleHead;
