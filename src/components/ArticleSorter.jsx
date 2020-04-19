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
  state = {
    sortBy: 'created_at',
  };

  render() {
    return (
      <form className="ArticleSorter" onSubmit={this.handleSubmit}>
        <label htmlFor="sorter">
          Sort articles by:
          <select className="sorter" id="sorter" onChange={this.handleChange}>
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Number of comments</option>
          </select>
        </label>
        <Button primary>Go!</Button>
      </form>
    );
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ sortBy: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { sortBy } = this.state;
    this.props.sortArticles(sortBy);
  };
}

export default ArticleSorter;
