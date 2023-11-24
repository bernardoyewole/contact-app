'use strict';

import { onEvent, select, selectAll, create, print } from "./utils.js";

import author, { Contact } from "./Contact.js";

const input = select('.input');
const addBtn = select('.add');
const response = select('.response');
const gridContainer = select('.grid-container');
const savedContacts = select('.saved-contacts span');

let contactArr = [];
let count = 0;

// onEvent('load', window, () => {
//     input.value = '';
// });

function isValid(userInput) {
    let arr = userInput.split(',');
    if (arr.length === 3) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(arr[2])) { return true; }
        response.innerText = `Please, enter a valid email address (ex: john@gmail.com)`;
    } else {
        response.innerText = `Please, enter name, city and email, separated by a comma (,)`;
    }
}

function splitUserInput(userInput) {
    let arr = userInput.split(',');
    let name = arr[0];
    let city = arr[1];
    let email = arr[2];
    return [name, city, email];
}

function createContact(userInput) {
    let args = splitUserInput(userInput);
    let newContact = new Contact(...args);
    contactArr.push(newContact);
    count++;
}

function updateSavedContacts() {
    savedContacts.innerText = count;
}

function createContactCard(userInput) {
    let args = splitUserInput(userInput);
    let card = create('div');
    let paragraph;
    for (let i = 0; i < args.length; i++) {
        paragraph = create('p');
        paragraph.innerText = args[i];
        card.appendChild(paragraph);
    }
    gridContainer.appendChild(card);
}

onEvent('click', addBtn, () => {
    if (isValid(input.value)) {
        createContact(input.value);
        createContactCard(input.value);
        updateSavedContacts();
    }
    print(contactArr)
})

