import React from 'react';
import * as api from '../utils/api';

class CommentVoter extends React.Component {
  state = {
    isLoading: true,
    upvoteCount: 0,
    downvoteCount: 0,
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="CommentVoter">
        <button onClick={this.handleUpvote}>Up</button>
        <button>Down</button>
      </div>
    );
  }

  handleUpvote = () => {
    const { comment_id } = this.props;
    api.commentVote(comment_id);
    this.setState((currentState) => {
      return {
        upvoteCount: currentState.upvoteCount + 1,
      };
    });
  };
}

export default CommentVoter;
