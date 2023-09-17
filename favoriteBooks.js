//define addFavoriteBook(...) function

var favoriteBooks = [];

const addFavoriteBook = (bookName) => {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
};

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectation");
addFavoriteBook("You Don't Know JS");

const printFavoriteBooks = () => {
  console.log(`favorite Books: ${favoriteBooks.length}`);
  favoriteBooks.map((favoriteBook, i) => console.log((i += 1), favoriteBook));
};

printFavoriteBooks();
