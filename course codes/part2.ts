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
