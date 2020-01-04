function showConsolog() {
    const firstName = 'John';
    const lastName = 'Ayling';

    console.log(`Your name is ${firstName.length > 7 ? 'long' : 'short'}`);
    console.log(`Your first name ${firstName} is ${firstName.length > lastName.length ? 'longer' : 'shorter'} than your family name, ${lastName}`);

    const myAge = 250;
    const yourAge = 25;

    console.log(`I am ${Math.abs(myAge - yourAge)} year ${myAge > yourAge ? 'older' : 'younger'} then you.`)

    const inputAge = prompt('Enter your age.');

    if (inputAge >= 18) {
        console.log(`You are ${inputAge}. You are old enough to drive.`);
    } else {
        console.log(`You are ${inputAge}. You will be allowed to drive after ${18 - inputAge} years.`);
    }

    const now = new Date();

    console.log(now.getFullYear());
    console.log(now.getMonth());
    console.log(now.getDate());
    console.log(now.getDay());
    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getTime());
    console.log(`${now.getFullYear()}-${(now.getMonth() + 1).pad()}-${now.getDate().pad()} ${now.getHours()}:${now.getMinutes().pad()}:${now.getSeconds().pad()}`);
}

Number.prototype.pad = function(size) {
    let s = String(this);
    while (s.length < (size || 2)) {
        s = '0' + s;
    }

    return s;
}