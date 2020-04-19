import React from 'react';
import * as api from '../utils/api';
import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Sweden Sans', sans-serif;
  background: transparent;
  border-radius: 3px;
  border: 20x solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: #e34234;
      color: white;
    `}
`;

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
        <Button primary>Post</Button>
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
