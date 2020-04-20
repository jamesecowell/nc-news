import React from 'react';
import * as api from '../utils/api';
import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Lato', sans-serif;
  background: transparent;
  border-radius: 3px;
  border: 1px solid #e34234;
  color: #e34234;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: #e34234;
      color: white;
    `}
`;

class CommentDeleter extends React.Component {
  render() {
    return <Button onClick={this.deleteComment}>Delete comment</Button>;
  }

  deleteComment = (event) => {
    const { comment_id, removeComment } = this.props;
    api.deleteComment(comment_id);
    removeComment(comment_id);
  };
}

export default CommentDeleter;
