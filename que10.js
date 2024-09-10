const books = [
    { title: "Book One", author: "Author A" },
    { title: "Book Two", author: "Author B" },
    { title: "Book Three", author: "Author C" }
];
books.splice(1, 1);  // Removes the second book
console.log(books);