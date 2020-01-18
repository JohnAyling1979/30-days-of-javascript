function showConsolog() {
    const dog = {};

    // level 1
    console.log(dog);
    dog.name = 'Pasely';
    dog.bark = function () { return 'woof woof' };
    console.log(dog.name);
    console.log(dog.bark());
    dog.breed = 'GR';
    dog.getDogInfo = function () {
        console.log(`Name : ${this.name}`);
        console.log(`Breed: ${this.breed}`);
    };
    dog.getDogInfo();

    // level 2
    const users = {
        Alex: {
            email: 'alex@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript'],
            age: 20,
            isLoggedIn: false,
            points: 30
        },
        Asab: {
            email: 'asab@asab.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
            age: 25,
            isLoggedIn: false,
            points: 50
        },
        Brook: {
            email: 'daniel@daniel.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
            age: 30,
            isLoggedIn: true,
            points: 50
        },
        Daniel: {
            email: 'daniel@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        John: {
            email: 'john@john.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
            age: 20,
            isLoggedIn: true,
            points: 50
        },
        Thomas: {
            email: 'thomas@thomas.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        Paul: {
            email: 'paul@paul.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
            age: 20,
            isLoggedIn: false,
            points: 40
        }
    }

    let mostSkillfull = Object.keys(users)[0];

    Object.keys(users).forEach((userKey) => {
        if (users[userKey].skills.length > users[mostSkillfull].skills.length) {
            mostSkillfull = userKey;
        }
    });

    console.log(mostSkillfull);

    let count = 0;

    Object.values(users).forEach((user) => {
        if (user.isLoggedIn) {
            count++;
        }
    });

    console.log(`Logged in users: ${count}`);

    count = 0;

    Object.values(users).forEach((user) => {
        if (user.points >= 50) {
            count++;
        }
    });

    console.log(`Users with 50 or more points ${count}`);

    count = 0;

    Object.values(users).forEach((user) => {
        if (user.skills.includes('MongoDB') &&
            user.skills.includes('Express') &&
            user.skills.includes('React') &&
            user.skills.includes('Node')) {
            count++;
        }
    });

    console.log(`Mern devs: ${count}`);

    // level 3
    const personAccount = {
        firstname: 'John',
        lastname: 'Ayling',
        incomes: [],
        expenses: [],

        totalIncome: function () {
            let total = 0;
            this.incomes.forEach(income => {
                total += income.ammount;
            });

            return total;
        },

        totalExpense: function () {
            let total = 0;
            this.expenses.forEach(income => {
                total += income.ammount;
            });

            return total;
        },

        accountInfo: function () {
            console.log(`First Name: ${this.firstname}`);
            console.log(`Last Name : ${this.lastname}`);
            console.log(`Balance   : ${this.accountBalance()}`);
        },

        addIncome: function (income) {
            this.incomes.push(income);
        },

        addExpense: function (expense) {
            this.expenses.push(expense);
        },

        accountBalance: function () {
            return this.totalIncome() - this.totalExpense();
        }
    }

    personAccount.addIncome({ammount: 2070, description: 'payroll'});
    personAccount.addIncome({ammount: 2070, description: 'payroll'});
    personAccount.addExpense({ammount: 647, description: 'Rent'});
    personAccount.addExpense({ammount: 314, description: 'Car payment'});
    personAccount.accountInfo();
}