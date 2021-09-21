const bookList = document.getElementById("book-list");
const addBook = () => {
  const bookName = document.getElementById("book-name");
  const author = document.getElementById("author");
  const publishedYear = document.getElementById("published-year");
  if (bookName.value === "" || author.value === "" || publishedYear === "") {
    swal({
      title: "Oops!",
      text: "You forgot something add!",
      icon: "warning",
      button: "Ok!",
    });
  } else {
    //   create new row
    const newRow = document.createElement("tr");

    // create new title
    const newBook = document.createElement("th");
    newBook.innerText = bookName.value;
    newRow.appendChild(newBook);

    // create new title
    const newAuthor = document.createElement("th");
    newAuthor.innerText = author.value;
    newRow.appendChild(newAuthor);
    // create new title
    const newPublishedYear = document.createElement("th");
    newPublishedYear.innerText = publishedYear.value;
    newRow.appendChild(newPublishedYear);

    //display the added items in the UI

    bookList.appendChild(newRow);
  }
};
