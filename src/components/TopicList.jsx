import React from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import Loader from './Loader';
import Burger from './Burger';

class TopicList extends React.Component {
  state = {
    topics: [],
    isLoading: true,
    mobileNavOpen: false,
  };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics, isLoading, mobileNavOpen } = this.state;

    let navClasses = 'topicLinks';
    if (mobileNavOpen) {
      navClasses = 'topicLinks open';
    }

    if (isLoading) return <Loader />;
    return (
      <nav className="TopicList">
        <h2>Topics:</h2>
        <Burger click={this.handleBurgerClick} />
        <ul className={navClasses} mobileNavOpen={mobileNavOpen}>
          {topics.map((topic) => {
            return (
              <li key={topic.slug} onClick={this.hideNav}>
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

  handleBurgerClick = () => {
    if (!this.state.mobileNavOpen) {
      this.setState({ mobileNavOpen: true });
    } else {
      this.setState({ mobileNavOpen: false });
    }
  };

  hideNav = () => {
    this.setState({ mobileNavOpen: false });
  };
}

export default TopicList;
