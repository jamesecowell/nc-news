import React from 'react';
import * as api from '../utils/api';

class ArticleVoter extends React.Component {
  state = {
    voteCount: 0,
  };

  render() {
    return (
      <section className="ArticleVoter">
        <button onClick={() => this.handleVote(1)}>Up</button>
        <button onClick={() => this.handleVote(-1)}>Down</button>
      </section>
    );
  }

  handleVote = (inc_vote) => {
    const { article_id } = this.props;
    api.articleVote(article_id, inc_vote);
    this.props.displayVote(inc_vote);
  };
}

export default ArticleVoter;
