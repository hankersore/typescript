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