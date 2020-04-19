import React from 'react';
import * as api from '../utils/api';
import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Lato', sans-serif;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #e34234;
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
    return (
      <Button primary onClick={this.deleteComment}>
        Delete comment
      </Button>
    );
  }

  deleteComment = (event) => {
    console.log('button clicked');
    const { comment_id, removeComment } = this.props;
    api.deleteComment(comment_id).then(removeComment(comment_id));
  };
}

export default CommentDeleter;
