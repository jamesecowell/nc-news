import React from 'react';
import CommentVoter from './CommentVoter';

class CommentBody extends React.Component {
  state = {
    comment: {},
    isLoading: true,
    optimisticVotes: 0,
  };

  render() {
    const { comment } = this.props;
    const { optimisticVotes } = this.state;

    return (
      <div className="CommentBody">
        <h3>{comment.author}</h3>
        <p>{comment.created_at}</p>
        <h3>Votes: {comment.votes + optimisticVotes}</h3>
        <p>{comment.body}</p>
        <CommentVoter
          comment_id={comment.comment_id}
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

export default CommentBody;
