'use strict'

function onInit() {
    renderBooks()
}


function renderBooks() {
    const books = getBooks();
    var strHTMLs = books.map((book) => {

        return `<tr> 
        <td>${book.id}</td>
            <td >${book.bookName}</td>
            <td > ${book.bookPrice}$</td>
            <td><img src="img/${book.imgUrl}.jpg"/></td>
            <td class="update-rating">${book.rating}</td>
            <td>
            <button class="Read" onclick="onReadBook('${book.id}')">Read</button>
            <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
            <button class="delete" onclick="onDeleteBook('${book.id}')">Delete</button></td>
             </tr> `
    })
    document.querySelector('.books-table').innerHTML = strHTMLs.join('')

}

function onSort(sortBy) {
    sort(sortBy)
    renderBooks()
}


function onNextPage(diff) {

    setNextPage(diff)
    renderBooks()
}



function onAddBook() {

    var newName = document.querySelector('.book-title').value;
    var newPrice = document.querySelector('.price').value;
    var rating = document.querySelector('.ratting').value;

    if ((newPrice && newName) && (rating > 0 || rating <= 5)) {
        const book = addBook(newName, newPrice, rating);
        renderBooks();
    }
}

function onUpdateBook(bookId) {
    var newPrice = +prompt('Enter new price');
    if (newPrice) {
        const book = updateBook(bookId, newPrice);
        renderBooks();

    }
}



function onReadBook(bookId) {

    var book = getBookById(bookId)
    var elModal = document.querySelector('.modal')

    elModal.querySelector('img').src = `img/${book.imgUrl}.jpg`
    elModal.querySelector('h3').innerText = book.bookName
    elModal.querySelector('h4 span').innerText = book.bookPrice + '$'
    elModal.querySelector('p').innerText = makeLorem();

    elModal.querySelector('.rate').innerHTML = `<span class="number">
	<button onclick="minusRatting('${book.id}')" class="minus">-</button>
	<span class="up-rating" >${book.rating}</span>
    <button onclick="plusRatting('${book.id}')" class="plus">+</button>
    </span>`

    elModal.classList.add('open')
}

function onCloseModal() {

    document.querySelector('.modal').classList.remove('open')

}

// function onUpdateRating(bookId) {
//     var newRate = changeRating(value, bookId);
//     if (newRate) {
//         const book = updateRating(bookId, rating);
//         renderBooks();
//     }
// }

function minusRatting(bookId) {
    var book = getBookById(bookId);

    var elRating = document.querySelector(".up-rating");
    var newRating = book.rating;
    newRating--;
    if (newRating === -1) return;
    elRating.innerText = newRating;

    updateRating(bookId, newRating);
    renderBooks();
}

function plusRatting(bookId) {
    var book = getBookById(bookId)
    var elRating = document.querySelector(".up-rating");
    var newRating = book.rating;
    newRating++;
    if (newRating === 11) return;

    elRating.innerText = newRating;
    updateRating(bookId, newRating);
    renderBooks();
}





function onDeleteBook(bookId) {
    deleteBook(bookId)
    renderBooks()
}

// function changeRating(value, bookId) {
//     var elRating = document.querySelector(".update-rating");
//     var newRating = +elRating.innerText + value;
//     var newRating = +elRating.innerText - value;
//     if (newRating === -1 || newRating === 11) return;
//     elRating.innerText = newRating;
//     updateRating(bookId, newRating);
// }



// function onInit() {
//     renderBooks()
// }


// function renderBooks() {
//     var strHTMLs = gBooks.map((book) => {

//         return `<tr>
//         <td>${book.id}</td>
//             <td>${book.bookName}</td>
//             <td> ${book.bookPrice}$</td>
//             <td><img src="${book.imgUrl}"/></td>
//             <td class="update-rating">${book.rating}</td>
//             <td>
//             <button class="Read" onclick="onReadBook('${book.id}')">Read</button>
//             <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
//             <button class="delete" onclick="onDeleteBook('${book.id}')">Delete</button></td>
//              </tr> `
//     })
//     document.querySelector('.books-table').innerHTML = strHTMLs.join('')

// }

// {/* <input type="number" placeholder="Update"> */ }


// function onAddBook() {

//     var newName = prompt('Enter new name');
//     var newPrice = +prompt('Enter new price');
//     var rating = +prompt('Rate the book 1-10');

//     if ((newPrice && newName) && (rating > 0 || rating <= 5)) {
//         const book = addBook(newName, newPrice, rating);
//         renderBooks();
//     }
// }

// function onUpdateBook(bookId) {
//     var newPrice = +prompt('Enter new price');
//     if (newPrice) {
//         const book = updateBook(bookId, newPrice);
//         renderBooks();

//     }
// }



// function onReadBook(bookId) {

//     var book = getBookById(bookId)
//     var elModal = document.querySelector('.modal')
//     elModal.querySelector('h3').innerText = book.bookName
//     elModal.querySelector('h4 span').innerText = book.bookPrice + '$'
//     elModal.querySelector('p').innerText = makeLorem();

//     elModal.querySelector('.rate').innerHTML = `<span class="number">
// 	<button onclick="minusRatting('${book.id}')" class="minus">-</button>
// 	<span class="up-rating" >${book.rating}</span>
//     <button onclick="plusRatting('${book.id}')" class="plus">+</button>
//     </span>`

//     elModal.classList.add('open')
// }

// function onCloseModal() {

//     document.querySelector('.modal').classList.remove('open')

// }

// function onUpdateRating(bookId) {
//     var newRate = changeRating(value, bookId);
//     if (newRate) {
//         const book = updateRating(bookId, rating);
//         renderBooks();
//     }
// }

// function minusRatting(bookId) {
//     var book = getBookById(bookId);

//     var elRating = document.querySelector(".up-rating");
//     var newRating = book.rating;
//     newRating--;
//     if (newRating === -1) return;
//     elRating.innerText = newRating;

//     updateRating(bookId, newRating);
//     renderBooks();
// }

// function plusRatting(bookId) {
//     var book = getBookById(bookId)
//     var elRating = document.querySelector(".up-rating");
//     var newRating = book.rating;
//     newRating++;
//     if (newRating === 11) return;

//     elRating.innerText = newRating;
//     updateRating(bookId, newRating);
//     renderBooks();
// }


// // function changeRating(value, bookId) {
// //     var elRating = document.querySelector(".update-rating");
// //     var newRating = +elRating.innerText + value;
// //     var newRating = +elRating.innerText - value;
// //     if (newRating === -1 || newRating === 11) return;
// //     elRating.innerText = newRating;
// //     updateRating(bookId, newRating);
// // }



// function onDeleteBook(bookId) {
//     deleteBook(bookId)
//     renderBooks()
// }