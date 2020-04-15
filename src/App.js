import React from 'react';
import { Router, Link } from '@reach/router';
import './styles/App.css';
import Header from './components/Header';
import TopicList from './components/TopicList';
import ArticleList from './components/ArticleList';
import ArticleSorter from './components/ArticleSorter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
          <Header />
        </Link>
        <ArticleSorter />
        <TopicList />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topics/:chosenTopic" />
        </Router>
      </div>
    );
  }
}

export default App;
