import React from 'react';
import * as api from '../utils/api';

class CommentAdder extends React.Component {
  state = {
    comment: '',
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="comment"
          placeholder="Add a comment..."
          onChange={(e) => this.handleChange(e.target.value, 'comment')}
        ></input>
        <button>Post</button>
      </form>
    );
  }

  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = (e) => {
    const { username, article_id } = this.props;
    const { comment } = this.state;
    e.preventDefault();
    api.postComment(article_id, username, comment).then((newComment) => {
      this.props.addComment(newComment);
    });
    this.setState({ comment: '' });
  };
}

export default CommentAdder;
