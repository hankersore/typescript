"use strict";
// starting from video 33 till 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// GETTER AND SETTER (doesn't work with async. good for side effects) unlike methods you don't have to call it, just assign value
class User {
    set login(l) {
        this._login = 'user-' + l;
        this.createdAt = new Date();
    }
    get login() {
        return 'no_login';
    }
}
const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login);
class Logger {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(...args);
        });
    }
}
class User1 {
    pay(paymentId) {
    }
    delete() {
        throw new Error("Method not implemented.");
    }
}
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // caves in db 
    }
    pay(date) {
        super.pay();
        if (date) {
            this.status = 'paid';
        }
    }
}
new PersistedPayment();
class HttpError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
class User2 {
    constructor(name) {
        this.name = name;
    }
}
class UserList {
    push(u) {
        this.users.push(u);
    }
}
class Payment1 {
}
class UserWithPayment extends Payment {
}
class UserWithPayment2 {
    constructor(user, payment) {
        this.payment = payment;
        this.user = user;
    }
}
function parseLocation(arg1, arg2) {
    if (typeof arg1 === 'object') {
        return { long: arg1.long,
            lat: arg1.lat };
    }
    else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return { long: arg1,
            lat: arg2 };
    }
    else if (typeof arg1 === 'string') {
        return { long: arg1,
            lat: arg1 };
    }
    else {
        throw new Error("");
    }
}
console.log(parseLocation('111'));
