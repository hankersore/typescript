"use strict";
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
