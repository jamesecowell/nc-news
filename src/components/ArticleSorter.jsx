import React from 'react';

class ArticleSorter extends React.Component {
  state = {
    sortBy: 'created_at',
  };

  render() {
    return (
      <form className="ArticleSorter" onSubmit={this.handleSubmit}>
        <label htmlFor="sorter">
          Sort articles by:
          <select id="sorter" onChange={this.handleChange}>
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Number of comments</option>
          </select>
        </label>
        <button>Go!</button>
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
