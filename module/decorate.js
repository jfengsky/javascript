// Generated by CoffeeScript 1.6.3
var Book, Publication;

Publication = new Interface('Publication', ['getIsbn', 'setIsbn', 'getTitle', 'setTitle', 'getAuthor', 'setAuthor', 'display']);

Book = function(isbn, title, author) {
  this.setIsbn(isbn);
  this.setTitle(tilte);
  this.setAuthor(author);
};

Book.prototype = {
  checkIsbn: function(isbn) {},
  getIsbn: function() {
    return this.isbn;
  },
  setIsbn: function(isbn) {
    this.isbn = isbn;
  }
};
