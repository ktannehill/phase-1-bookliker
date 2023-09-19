// document.addEventListener("DOMContentLoaded", function() {});
// 1. fetch books
    // display book titles as li in ul#list

// Global varibles
const BOOKSURL = "http://localhost:3000/books"
const USERSURL = "http://localhost:3000/users"
const listUL = document.querySelector("#list")


// Helper functions
const createBookList = (book) => {
    // console.log(book)
    // debugger
    const li = document.createElement("li")
    li.textContent = book.title
    listUL.append(li)
}


// Fetch requests
fetch(BOOKSURL)
.then(resp => {
    if(resp.ok) {
        return resp.json()
    } else {
        throw("Error!")
    }
})
.then(booksData => {
    booksData.forEach(createBookList)
})
.catch(err => alert(err))