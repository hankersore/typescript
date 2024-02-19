// starting from video 33 till 

// GETTER AND SETTER (doesn't work with async. good for side effects) unlike methods you don't have to call it, just assign value

class User {
    _login: string;
    password: string;
    createdAt: Date;

    set login (l: string) {
        this._login = 'user-' + l;
        this.createdAt = new Date();
    }

    get login () {
        return 'no_login';
    }
}

const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login);

// IMPLEMENTS

interface ILogger {
    log(...args) :void;
    error(...args) :void;
}

class Logger implements ILogger {
    log(...args: any[]): void {
        console.log(...args);
    }
  async error(...args: any[]): Promise<void>{
        console.log(...args);
    }  
}
interface IPayable {
    pay(paymentId: number): void;
    price?: number;
}
interface IDeletable {
    delete(): void;
}
class User1 implements IPayable, IDeletable {
    pay(paymentId: number | string): void {
        
    }
    
    delete(): void {
        throw new Error("Method not implemented.");
    }
    
}

// EXTENDS is dependency of one class from another one with all its methods and props
// is needed when one thing has many variants

type PaymentStatus = 'new' | 'paid';
class Payment {
    id: number;
    status: PaymentStatus = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay () {
        this.status = 'paid';
    }
}

class PersistedPayment extends Payment {
    databaseId: number;
    paidAt: Date;

    constructor() {
        const id = Math.random();
        super(id);
    }

    save() {
        // caves in db 
    }

   override pay(date?: Date) {
        super.pay();
        if (date) {
            this.status = 'paid';
        }
    }
}

new PersistedPayment();

class HttpError extends Error {
    code: number;

    constructor(message: string, code?: number) {
        super(message);
        this.code = code ?? 500;
    }
}