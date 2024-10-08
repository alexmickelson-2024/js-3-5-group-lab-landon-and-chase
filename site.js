import { bookList } from "./books.js";

const fliterInputElement = document.getElementById("filterInput")
var filteredBookList;

const setFilter = () => {
  console.log(fliterInputElement.value)
  filteredBookList = 
}

fliterInputElement.addEventListener("input", setFilter);

const drawBooks = (books) => {
  const bookNode = (book) => {
    const tableRowElement = document.createElement("tr")
    tableRowElement.id = book.title

    const tableDataTitle = document.createElement("td")
    const tableDataAuthor = document.createElement("td")
    const tableDataSummary = document.createElement("td")


    tableDataTitle.textContent = book.title
    tableDataAuthor.textContent = book.author
    tableDataSummary.textContent = book.summary

    tableRowElement.append(tableDataTitle, tableDataAuthor, tableDataSummary)
    
    const id = book.title;

    tableRowElement.addEventListener("click", () => {
      const selectedBookNode = document.getElementById("selectedBookTitle");
      selectedBookNode.textContent = id
    })

    return tableRowElement
  }
  //   <tr>
  //     <td>${book.title}</td>
  //     <td>${book.author}</td>
  //     <td>${book.summary}</td>
  //   </tr>


  const tableBodyElement = document.getElementById("myTableBody")

  books.forEach(book => {
    tableBodyElement.append(bookNode(book))
  })
}

console.log(filteredBookList);

if (filteredBookList)
  drawBooks(filteredBookList)

else
  drawBooks(bookList)