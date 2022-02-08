'use strict'

function onInit() {
    renderBooks()
    doTrans();
}


function renderBooks() {
    const books = getBooks();
    var strHTMLs = books.map((book) => {

        return `<tr> 
        <td>${book.id}</td>
            <td >${book.bookName}</td>
            <td  data-price="price"> ${formatCurrency(book.bookPrice)}</td>
            <td><img src="img/${book.imgUrl}.jpg"/></td>
            <td class="update-rating">${book.rating}</td>
            <td>
            <button   data-trans="read" class="Read" onclick="onReadBook('${book.id}')">read</button>
            <button   data-trans="update" class="update" onclick="onUpdateBook('${book.id}')">update</button>
            <button   data-trans="delete" class="delete" onclick="onDeleteBook('${book.id}', event)">delete</button></td>
             </tr> `
    })
    document.querySelector('.books-table').innerHTML = strHTMLs.join('')
    doTrans();
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
    elModal.querySelector('.price-modal').innerText = formatCurrency(book.bookPrice)

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


function onDeleteBook(bookId,ev) {
  
    ev.stopPropagation();

    if (confirm(getTrans('sure'))) {
        deleteBook(bookId);
        renderBooks();
    }
}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    // doTrans();
    
    renderBooks()
}

// function renderConversion() {
//     var elPrice = document.querySelectorAll('[data-price]')
//     elPrice.forEach(price => {
        
//     });
// }