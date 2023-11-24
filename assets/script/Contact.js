'use strict';

export default 'Contact';

export class Contact {
    #name;
    #city;
    #email;

    constructor(name, city, email) {
        this.#name = name;
        this.#city = city;
        this.#email = email;
    }

    get name() { return `Name: ${this.#name}` };
    get city() { return `City: ${this.#city}` };
    get email() { return `Email: ${this.#email}` };
}