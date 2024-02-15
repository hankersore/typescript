let revenue: number = 1000;
let bonus: number = 500;
let b: string = 'abc';
let c: boolean = false;
let res: number = revenue + bonus;
// console.log(res);

// TYPES IN FUNCTION

function getFullName(firstname: string, surname: string): string {
    return `${firstname} ${surname}`
}

const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`
}
// console.log(getFullName('Dilshoda', 'Alimova'));


// OBJECTS

function getFullName1(userEntity: {firstname: string, surname: string}): string {
    return `${userEntity.firstname} ${userEntity.surname}`
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
}

// console.log(getFullName1(user));

// OBJECT TYPES

let info: {
    officeId: number,
    isOpened: boolean,
    contacts: { 
        phone: string,
        email: string,
        address: {
            city: string
        }
    }
} = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+998330830565",
        "email": "exampe@gmail.com",
        "address": {
            "city": "Tashkent"
        }
    }
}


// ARRAYS

const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
    console.log(skill.toLowerCase());
}

const result = skills.filter((s: string) => s !== 'DevOps')
.map(s => s + '! ')
.reduce((a, b) => a+b);

// console.log(result);


// TUPLES

const skill: [number, string] = [1, 'Dev'];
// const id = skill[0];
// const skillname = skill[1];

const [id, skillName] = skill;
const arr: [number, string, ...boolean[]] = [1, 'abc', true, true, false]

// READONLY

const lang: readonly [number, string] = [1, 'ru'];
const langs: ReadonlyArray<string> = ['ru', 'en'];

// ENUM

enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED
}
// 1 - success
// 2 - in process
// 3 - failed

const response = {
    message: 'successful payment',
    statusCode: StatusCode.SUCCESS
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS);
action(StatusCode.FAILED);

const enum Roles {
    ADMIN = 1,
    USER = ADMIN * 3
}

const response2 = Roles.ADMIN;

// func type exercise

enum QuestionStatus {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted'
}

async function getFaqs(req: {
    topicId: number;
    status: QuestionStatus;
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}

// UNION

// function logId(id: string | number | boolean) {
//     console.log(id);
// }
// logId(1);
// logId('di');
// logId(true);

// NARROWING!

function logId(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id);
    } else if (typeof id === 'number') {
        console.log(id);
    } else {
        console.log(id);
    }
}

function logError(err:  string | string[]) {
    if (Array.isArray(err)) {
        console.log(err); 
    }
    else {
        console.log(err);
    }
}

function logObject(obj:  {a: number} | {b: number}) {
    if ('a' in obj) {
        console.log(obj.a); 
    }
    else {
        console.log(obj.b);
    }
}

function logMultipleIds(a: string | number, b: string | boolean) {
    if (a===b) {}
    else {
        console.log(a);
    }
}

// TYPE ALIASES

type httpMethod = 'post' | 'get';

type myString = string;

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
    return 1;
}
fetchWithAuth('s', 'post');

type User = {
    name: string,
    age: number,
    skills: string[]
}

type Role = {
    id: number;
}

type UserWithRole = User & Role;

let user1: UserWithRole = {
    name: 'me',
    age: 33,
    skills: ['1', '2'],
    id: 1
}

// LITERAL TYPES

function fetchWithAuth1(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1;
}

fetchWithAuth1('s', 'get');

let method = 'post';
fetchWithAuth1('a', method as 'post');

// INTERFACES
interface User1  {
    name: string,
    age: number,
    skills: string[],
    log: (id: number) => string;
}

interface Role1 {
    roleId: number;
}

interface UserWithRole1 extends User1, Role1 {
    createdAt: Date;
}

let user2: UserWithRole1 = {
    name: 'me',
    age: 33,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),
    log(id) {
        return '';
    }
}

// ? for optional params

interface MyUser {
    login: string;
    password?: string;
}

const myuser: MyUser = {
    login: 'blabla@com'
}

function multiply(first: number, second?: number): number {
    if (!second) {
        return first*first;
    }
    return first*second;
}

// console.log(multiply(4));

// optional chaining
interface UserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary';
    }
}

function testPass(user: UserPro) {
    const t = user.password?.type;
}

// nullish

function test(param?: string) {
    const t = param ?? multiply(5);
    return t;
}

// console.log(test());

// exercise

interface Payment {
    sum: number;
    from: 2;
    to: 4
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}
interface PaymentReq extends Payment {}
interface DataSuccess extends Payment {
    databaseId: number;
}
interface DataFailed {
    errorMessage: string;
    errorCode: number;
}
interface ResponseSuccess {
    status: PaymentStatus.Success;
    data: DataSuccess;
}
interface ResponseFailed {
    status: PaymentStatus.Failed;
    data: DataFailed;
}

// VOID
// void means func returns nothing (it's not undefined)

type voidFunc = () => void;

const n: voidFunc = () => {
    return false;
}

const m: voidFunc = () => {}

// UNKNOWN - we don't know what's inside a variable
// unknown is not any
let input: unknown;
function run(i: unknown) {
    if (typeof i == 'number') {
        i++;
    } else {
        i
    }
}
run(input);

async function getData() {
    try {
        await fetch('');
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}
// everything with union type unknown becomes unknown
type U1 = unknown | number; 
// type intersection. unknown is broader type so I1 would behave as string
type I1 = unknown & string;

// NEVER

function generateError(message: string): never {
    throw new Error(message);
}
function isString(x: string | number) : boolean {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('abcdefg')
}

// CASTING
// overriding types

let a = 5;
let d : string = a.toString();
let g: string = new String(a).valueOf();

let e = 'fjfjf';
let f: number = parseInt(e);

interface SomeUser {
    name: string;
    email: string;
    login: string;
}
const user3: SomeUser = {
    name: 'di',
    email: 'di@gmail.com',
    login: 'dii',
}
interface Admin {
    name: string;
    role: number;
}
function userToAdmin(user3: SomeUser): Admin {
    return {
        name: user3.name,
        role: 1
    }
}

// TYPE GUARD

let myVar: unknown;

myVar = "abcdefg";

function isString1(value: unknown): value is string {
    return typeof value === "string";
}

if (isString1(myVar)) {
    console.log(myVar.toUpperCase()); 
} else {
    console.log("myVariable is not a string.");
}

