import React from 'react';
import * as api from '../utils/api';

class CommentVoter extends React.Component {
  state = {
    isLoading: true,
    voteCount: 0,
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <section className="CommentVoter">
        <button onClick={() => this.handleVote(1)}>Up</button>
        <button onClick={() => this.handleVote(-1)}>Down</button>
      </section>
    );
  }

  handleVote = (inc_vote) => {
    const { comment_id } = this.props;
    api.commentVote(comment_id, inc_vote);
    this.props.displayVote(inc_vote);
  };
}

export default CommentVoter;
