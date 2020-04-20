import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Lato', sans-serif;
  background: transparent;
  border-radius: 3px;
  border: 20x solid #e34234;
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

class ArticleSorter extends React.Component {
  render() {
    return (
      <div className="ArticleSorter">
        Sort by:
        <Button primary value="created_at" onClick={this.handleClick}>
          Date
        </Button>
        <Button primary value="votes" onClick={this.handleClick}>
          Votes
        </Button>
        <Button primary value="comment_count" onClick={this.handleClick}>
          Number of comments
        </Button>
      </div>
    );
  }

  handleClick = (event) => {
    const { value } = event.target;
    this.props.sortArticles(value);
  };
}

export default ArticleSorter;
