import React from 'react';
import * as api from '../utils/api';

class CommentDeleter extends React.Component {
  render() {
    return <button onClick={this.deleteComent}>Delete comment</button>;
  }

  deleteComment = () => {
    const { comment_id, removeComment } = this.props;
    api.deleteComment(comment_id).then(removeComment);
  };
}

export default CommentDeleter;
