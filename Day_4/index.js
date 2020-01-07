function showConsolog() {
//    const inputAge = prompt('Enter your age.');
    const inputAge = 34;

    if (inputAge >= 18) {
        console.log(`You are ${inputAge}. You are old enough to drive.`);
    } else {
        console.log(`You are ${inputAge}. You will be allowed to drive after ${18 - inputAge} years.`);
    }

    const myAge = 250;
    const yourAge = 25;

    console.log(`I am ${Math.abs(myAge - yourAge)} year ${myAge > yourAge ? 'older' : 'younger'} then you.`);

    let a = 4
    let b = 3
    console.log(`${a} is ${a > b ? 'greater' : 'lower'} than 3`);

    let grade = 'F'
    const score = 82;

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 60) {
        grade = 'C';
    } else if (score >= 50) {
        grade = 'D';
    }

    console.log(grade);
    /*
        Check if the season is Autumn, Winter, Spring or Summer. If the user input is:

        September, October or November, the season is Autumn.
        December, January or February, the season is Winter.
        March, April or May, the season is Spring
        June, July or August, the season is Summer
    */
    let month = 'July';

    switch(month) {
        case 'September':
        case 'October':
        case 'November':
            season = 'Autumn';
            break;
        case 'December':
        case 'January':
        case 'February':
            season = 'Winter';
            break;
        case 'March':
        case 'April':
        case 'May':
            season = 'Spring';
            break;
        case 'June':
        case 'July':
        case 'August':
            season = 'Summer';
            break;
    }

    console.log(season);

    console.log(`${a} is an ${a % 2 === 0 ? 'even' : 'odd'} number`);
    console.log(`${b} is an ${b % 2 === 0 ? 'even' : 'odd'} number`);

    const day = 'Monday';
    let dayTyp = 'work';

    if (day === 'Saterday' || day === 'Sunday') {
        dayTyp = 'weekend'
    }

    console.log (dayTyp);

    let days = 31;
    const monthString = 'JUNE'.toLowerCase();
    const days30 = ['april', 'june', 'september', 'november'];

    if (days30.includes(monthString)) {
        days = 30;
    }
    else if (monthString === 'february') {
        days = 28;
    }

    console.log(days)
}