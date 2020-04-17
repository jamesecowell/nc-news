import React from 'react';
import * as api from '../utils/api';

class CommentDeleter extends React.Component {
  render() {
    return <button onClick={this.deleteComment}>Delete comment</button>;
  }

  deleteComment = (event) => {
    console.log('button clicked');
    const { comment_id, removeComment } = this.props;
    api.deleteComment(comment_id).then(removeComment(comment_id));
  };
}

export default CommentDeleter;
