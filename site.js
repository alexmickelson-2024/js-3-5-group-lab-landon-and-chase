import { bookList } from "./books.js";

const tableBodyElement = document.getElementById("myTableBody")
const fliterInputElement = document.getElementById("filterInput")

fliterInputElement.addEventListener("input", () => {
  tableBodyElement.replaceChildren()
    drawBooks(bookList.filter((book) =>  book.title.toLowerCase().includes(fliterInputElement.value.toLowerCase()) || book.author.toLowerCase().includes(fliterInputElement.value.toLowerCase()) || book.summary.toLowerCase().includes(fliterInputElement.value.toLowerCase())))
});

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



  books.forEach(book => {
    tableBodyElement.append(bookNode(book))
  })
}

drawBooks(bookList)