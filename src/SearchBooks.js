import React, { Component } from "react";
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";
import SearchbooksInput from "./SearchbooksInput";

class SearchBooks extends Component {
  render() {
    const {
      searchBooks,
      myBooks,
      onSearch,
      onResetSearch,
      onMove,
    } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              Close
            </button>
          </Link>
          <SearchbooksInput onSearch={onSearch} />
        </div>
        <SearchResult
          searchBooks={searchBooks}
          myBooks={myBooks}
          onMove={onMove}
        />
      </div>
    );
  }
}
export default SearchBooks;
