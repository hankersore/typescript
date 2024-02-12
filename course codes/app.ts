const a = 1;

let revenue: number = 1000;
let bonus: number = 500;
let b: string = 'abc';
let c: boolean = false;

let res: number = revenue + bonus;
// console.log(res);


// types in func

function getFullName(firstname: string, surname: string): string {
    return `${firstname} ${surname}`
}

const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`
}

// console.log(getFullName('Dilshoda', 'Alimova'));


// objects

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

// types in obj

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


// arrays

const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
    console.log(skill.toLowerCase());
}

const result = skills.filter((s: string) => s !== 'DevOps')
.map(s => s + '! ')
.reduce((a, b) => a+b);

// console.log(result);


// tuples

const skill: [number, string] = [1, 'Dev'];
// const id = skill[0];
// const skillname = skill[1];

const [id, skillName] = skill;

const arr: [number, string, ...boolean[]] = [1, 'abc', true, true, false]

// readonly

const lang: readonly [number, string] = [1, 'ru'];

const langs: ReadonlyArray<string> = ['ru', 'en'];


// enums

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

function action(status: StatusCode) {

}

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


// union

// function logId(id: string | number | boolean) {
//     console.log(id);
// }

// logId(1);
// logId('di');
// logId(true);

// narrowing!

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
    if (a===b) {

    }
    else {
        console.log(a);
    }
}