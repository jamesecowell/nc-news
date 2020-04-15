import React from 'react';

class CommentBody extends React.Component {
  state = {
    comment: {},
    isLoading: true,
  };

  render() {
    const { comment } = this.props;

    return (
      <div className="CommentBody">
        <h3>{comment.author}</h3>
        <p>{comment.created_at}</p>
        <h3>Votes: {comment.votes}</h3>
        <p>{comment.body}</p>
      </div>
    );
  }
}

export default CommentBody;
