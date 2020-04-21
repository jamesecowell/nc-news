import React from 'react';
import Voter from './Voter';
import CommentDeleter from './CommentDeleter';
import Moment from 'react-moment';

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
        <Moment fromNow>{comment.created_at}</Moment>
        <h3>Votes: {comment.votes + optimisticVotes}</h3>
        <p>{comment.body}</p>
        {deleteButton}
        <Voter
          id={comment.comment_id}
          type="comments"
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
