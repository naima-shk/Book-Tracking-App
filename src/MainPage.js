import React from "react";
//import {Link} from "react-router-dom";
import BookShelf from "./BookShelf.js";
import "./App.css";
import { NavLink } from "react-router-dom";

export default class MainPage extends React.Component {
    
  render() {
    const ShelfDisplay = [
      { type: "currentlyReading", name: "Currently Reading" },
      { type: "wantToRead", name: "Want to Read" },
      { type: "read", name: "Read" },
    ];
    const books = this.props.books;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads: A Book Lending App</h1>
        </div>
        <div className="list-books-content">
          <div>
            {ShelfDisplay.map((shelf) => (
              <BookShelf
                key={shelf.type}
                books={books.filter((book) => book.shelf === shelf.type)}
                name={shelf.name}
                moveShelf={this.props.onChange}
              />
            ))}
          </div>
        </div>
        <NavLink to='/search'>
        <div className="open-search">
          <button  onClick={this.searchHandler}>Search</button>
            </div>
            </NavLink>
      </div>
      );
  }
}
