import React from 'react';
import CommentVoter from './CommentVoter';
import CommentDeleter from './CommentDeleter';

class CommentBody extends React.Component {
  state = {
    comment: {},
    isLoading: true,
    optimisticVotes: 0,
  };

  render() {
    const { comment, username, removeComment } = this.props;
    const { optimisticVotes } = this.state;

    let deleteButton;
    if (comment.author === username) {
      deleteButton = (
        <CommentDeleter
          comment_id={comment.comment_id}
          removeComment={removeComment}
        />
      );
    }

    return (
      <div className="CommentBody">
        <h3>{comment.author}</h3>
        <p>{comment.created_at}</p>
        <h3>Votes: {comment.votes + optimisticVotes}</h3>
        <p>{comment.body}</p>
        {deleteButton}
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
