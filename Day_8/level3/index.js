const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

function signUp() {
    const username = document.getElementById('userSignUp').value;
    const email = document.getElementById('emailSignUp').value;
    const password = document.getElementById('passwordSignUp').value;
    const errorElement = document.getElementById('signUpError');
    const successElement = document.getElementById('signUpSuccess');

    errorElement.innerHTML = '';
    successElement.innerHTML = '';

    let add = true;

    users.forEach(user => {
        if (user.email === email)
        add = false;
    });

    if (!add) {
        errorElement.innerHTML = 'Already signed up';
        return;
    }

    const today = new Date();
    const day = String(today.getDate()).padStart(2,0);
    const month = String(today.getMonth() + 1).padStart(2,0);
    const year = today.getFullYear();
    let hour = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2,0);
    let tod = 'am';
    if (hour >= 12) {
        tod = 'pm';
        if (hour > 12) {
            hour -= 12;
        }
    }

    try {
        users.push({
            _id: getUuid(),
            username,
            email,
            password,
            createdAt: `${day}/${month}/${year} ${hour}:${minutes} ${tod}`,
            isLoggedIn: false
        });

        successElement.innerHTML = `User ${username} is created`;
    } catch (e) {
        errorElement.innerHTML = e.message;
        errorElement.style.visibility = 'visible';
    }
}

function signIn() {
    const email = document.getElementById('emailSignIn').value;
    const password = document.getElementById('passwordSignIn').value;
    const errorElement = document.getElementById('signInError');
    const successElement = document.getElementById('signInSuccess');

    let uuid = null;
    errorElement.innerHTML = '';

    users.forEach(user => {
        if (email === user.email && password === user.password) {
            uuid = user._id;
        }
    });

    if (uuid === null) {
        errorElement.innerHTML = 'Error logging in';
        return;
    }

    successElement.innerHTML = `User ${uuid} is logged in`;
}

window.addEventListener('keyup', buttonValidation);

function buttonValidation() {
    const upUserElement = document.getElementById('userSignUp');
    const upEmailElement = document.getElementById('emailSignUp');
    const upPasswordElement = document.getElementById('passwordSignUp');
    const upButton = document.getElementById('signUpButton');

    const inUserElement = document.getElementById('emailSignIn');
    const inPasswordElement = document.getElementById('passwordSignIn');
    const inButton = document.getElementById('signInButton');

    upButton.disabled = true;
    inButton.disabled = true;

    if (upUserElement.value && upEmailElement.value && upPasswordElement.value) {
        upButton.disabled = false;
    }

    if (inUserElement.value && inPasswordElement.value) {
        inButton.disabled = false;
    }
}

function getUuid() {
    const size = 6;
    const maxTries = 10;
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const currentUuid = [];

    users.forEach(user => {
        currentUuid.push(user._id);
    });

    let uuid = '';
    let tryCount = 0;

    do {
        uuid = '';

        for (let i = 0; i < size; i++) {
            uuid += chars[Math.floor(Math.random() * chars.length)];
        }

        tryCount++;

        if (tryCount >= maxTries) {
            throw new Error('Can not genreate a unquine key');
        }
    } while (currentUuid.includes(uuid))

    return uuid;
}