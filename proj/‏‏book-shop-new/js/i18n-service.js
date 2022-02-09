'use strict'


var gTrans = {
    title: {
        en: 'Book Shop',

        he: 'חנות ספרים'
    },
    ID: {
        en: 'Id',

        he: 'מזהה',
    },
    bookName: {
        en: 'Book Name',

        he: 'שם הספר'
    },
    price: {
        en: 'Price',

        he: 'מחיר',
    },
    img: {
        en: 'Img',

        he: 'תמונה',
    },
    rate: {
        en: 'Rate',

        he: 'דירוג'
    },
    actions: {
        en: 'Action',

        he: 'פעולות',
    },
    read: {
        en: 'Read',

        he: 'קריאה',
    },
    update: {
        en: 'Update',

        he: 'שדרוג',
    },
    delete: {
        en: 'Delete',

        he: 'מחיקה',
    },
    'add-book-placeholder': {
        en: 'Book Title',
        he: 'שם הספר',
    },
    'add-price-placeholder': {
        en: 'Price',
        he: 'מחיר',
    },
    add: {
        en: 'Add Book',
        he: 'הוסף',
    },

    'add-rate-placeholder': {
        en: 'Rate 1-10',
        he: 'דירוג מ1-10'
    },
    'price-label-modal': {
        en: 'Book Price:',
        he: 'מחיר הספר:',
    },
    'content-modal': {
        en: 'Content:',
        he: 'תוכן:'

    },
    'rate-modal': {
        en: 'Rate:',
        he: 'דירוג:'
    },
    'close-modal': {
        en: 'Close:',

        he: 'סגירה'
    },



}

var gCurrLang = 'en';
// style: 'currency', currency: 'EUR' 
function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'

    var txt = keyTrans[gCurrLang]
    if (!txt) txt = keyTrans.en

    return txt
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')

    els.forEach((el) => {
        // console.dir(el)
        var transKey = el.dataset.trans
        var txt = getTrans(transKey)

        if (el.nodeName === 'INPUT') {
            // el.setAttribute('placeholder', txt)
            //THE SAME!

            el.placeholder = txt
        } else el.innerText = txt
        // console.log('el', el);

    })
}

function setLang(lang) {
    gCurrLang = lang;
}

function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {

    if (gCurrLang === 'en') {

        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);

    } else {
        return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num);

    }

}

function formatDate(time) {

    var options = {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: true,
    };

    return new Intl.DateTimeFormat(gCurrLang, options).format(time);
}

function kmToMiles(km) {
    return km / 1.609;
}