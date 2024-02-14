"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const a = 1;
let revenue = 1000;
let bonus = 500;
let b = 'abc';
let c = false;
let res = revenue + bonus;
// console.log(res);
// types in func
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
// console.log(getFullName('Dilshoda', 'Alimova'));
// objects
function getFullName1(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Dilshoda',
    surname: 'Alimova',
    city: 'Tashkent',
    age: 19,
    skills: {
        dev: true,
        devOps: false,
    }
};
// console.log(getFullName1(user));
// types in obj
let info = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+998330830565",
        "email": "exampe@gmail.com",
        "address": {
            "city": "Tashkent"
        }
    }
};
// arrays
const skills = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const result = skills.filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
// console.log(result);
// tuples
const skill = [1, 'Dev'];
// const id = skill[0];
// const skillname = skill[1];
const [id, skillName] = skill;
const arr = [1, 'abc', true, true, false];
// readonly
const lang = [1, 'ru'];
const langs = ['ru', 'en'];
// enums
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
// 1 - success
// 2 - in process
// 3 - failed
const response = {
    message: 'successful payment',
    statusCode: StatusCode.SUCCESS
};
function action(status) {
}
action(StatusCode.SUCCESS);
action(StatusCode.FAILED);
const response2 = 1 /* Roles.ADMIN */;
// func type exercise
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["Published"] = "published";
    QuestionStatus["Draft"] = "draft";
    QuestionStatus["Deleted"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}
// union
// function logId(id: string | number | boolean) {
//     console.log(id);
// }
// logId(1);
// logId('di');
// logId(true);
// narrowing!
function logId(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
    }
    else {
        console.log(a);
    }
}
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth('s', 'post');
let user1 = {
    name: 'me',
    age: 33,
    skills: ['1', '2'],
    id: 1
};
// literal types
function fetchWithAuth1(url, method) {
    return 1;
}
fetchWithAuth1('s', 'get');
let method = 'post';
fetchWithAuth1('a', method);
let user2 = {
    name: 'me',
    age: 33,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),
    log(id) {
        return '';
    }
};
const myuser = {
    login: 'blabla@com'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
// nullish
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
    return t;
}
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
