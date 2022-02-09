'use strict'

const STORAGE_KEY = 'bookDB';
var gBooks;
const PAGE_SIZE = 4;
var gPageIdx = 0;
var gSortByPrice = true;
var gSortByBookName = true;

_createBooks()


function getBooks() {
    var books = gBooks

    const startIdx = gPageIdx * PAGE_SIZE

    books = books.slice(startIdx, startIdx + PAGE_SIZE)
    return books
}


function updateRating(bookId, rating) {
    var book = getBookById(bookId);
    book.rating = rating;
    _saveBooksToStorage();
}

function setNextPage(diff) {
    gPageIdx += diff
    if (gPageIdx * PAGE_SIZE >= gBooks.length || gPageIdx < 0) {
        gPageIdx -= diff
    }
}



function sort(sortBy) {


    if (sortBy === 'title') {
        gSortByBookName = !gSortByBookName;
        var diff = (gSortByBookName) ? 1 : -1
        gBooks.sort((a, b) => (a.bookName.toUpperCase() > b.bookName.toUpperCase() ? 1 : -1) * diff);
    }

    if (sortBy === 'price') {
        gSortByPrice = !gSortByPrice;
        var diff = (gSortByPrice) ? 1 : -1

        gBooks.sort((a, b) => diff * (a.bookPrice - b.bookPrice))
    }

}


function addBook(bookName, bookPrice, rating) {

    const book = _createBook(bookName, bookPrice, rating)
    gBooks.unshift(book)
    _saveBooksToStorage()
    return book
}

function updateBook(bookId, bookPrice) {

    const book = gBooks.find((book) => book.id === bookId)
    book.bookPrice = bookPrice;
    _saveBooksToStorage()
    return book
}



function getBookById(bookId) {
    const book = gBooks.find((book) => bookId === book.id)
    return book
}



function deleteBook(bookId) {
    const bookIdx = gBooks.findIndex((book) => bookId === book.id)
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage()
}


function _createBook(bookName, bookPrice, rating = 0, imgUrl = 'book') {
    const book = {
        id: makeId(3),
        bookName,
        bookPrice,
        imgUrl,
        rating,
    }
    return book
}

function _createBooks() {
    gBooks = loadFromStorage(STORAGE_KEY)
    if (!gBooks || !gBooks.length) {
        gBooks = [
            _createBook('Harry Potter', 130, 10, 'harry-potter'),
            _createBook('Hobbit', 85, 2, 'hobbit'),
            _createBook('Little Prince', 145, 1, 'little prince'),
            _createBook('Peter Pan', 112, 2, 'peter-pan1'),
            _createBook('Book Of Name', 89, 3, 'book of name'),
            _createBook('Life In Woods', 50, 4, 'Life In Woods'),
            _createBook('Beneath A Scarlet Sky', 79, 1, 'Beneath A Scarlet Sky'),
            _createBook('All The Missing Girls', 110, 2, 'All The Missing Girls'),
            _createBook('little prince', 20, 3, 'book'),
            _createBook('little prince', 21, 4, 'book')
        ]
        _saveBooksToStorage()
    }

}


function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}



function makeId(length = 3) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var txt = '';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}



// function turnPage(direction) {
//     if ('prev' === direction) {
//         gPageIdx--;
//         // console.log('gPageIdx', gPageIdx);

//     } else if ('next' === direction) {
//         gPageIdx++;
//         // console.log('gPageIdx', gPageIdx);
//     } else {
//         gPageIdx = direction;
//         // console.log('gPageIdx', gPageIdx);
//     }
//     if (0 > (gPageIdx * PAGE_SIZE)) {
//         gPageIdx++;
//     }
//     if (gBooks.length <= (gPageIdx * PAGE_SIZE)) {
//         gPageIdx--;
//     }
// }