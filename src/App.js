import React from 'react';
import { Router, Link } from '@reach/router';
import './styles/App.css';
import Header from './components/Header';
import TopicList from './components/TopicList';
import ArticleList from './components/ArticleList';
import ArticleSorter from './components/ArticleSorter';
import ArticleBody from './components/ArticleBody';

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
          <ArticleBody path="/topics/:chosenTopic/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
