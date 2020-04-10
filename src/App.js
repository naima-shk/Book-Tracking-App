import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./MainPage.js";
import SearchPage from "./SearchPage.js";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    this.setBooksState();
  }
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setBooksState();
    });
  };
  setBooksState() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage books={this.state.books} onChange={this.moveShelf} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage books={this.state.books} onChange={this.moveShelf} />
          )}
        />
      </div>
    );
  }
}
export default App;
