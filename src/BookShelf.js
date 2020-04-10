import React from "react";
import Book from "./Book.js";

class BookShelf extends React.Component {
  ShelfNewMove = (book, shelf) => {
    this.props.moveShelf(book, shelf);
  };

  render() {
    const books = this.props.books;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (
              <Book
                book={book}
                key={index}
                onUpdate={(shelf) => {
                  this.ShelfNewMove(book, shelf);
                }}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;
