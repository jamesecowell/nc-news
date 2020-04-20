import React from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import Loader from './Loader';

class TopicList extends React.Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <nav className="TopicList">
        <h2>Topics:</h2>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="topicLinks">
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>
                  <p>{topic.slug}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default TopicList;
