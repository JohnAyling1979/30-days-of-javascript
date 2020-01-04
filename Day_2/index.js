function showConsolog() {
    let challenge = '30 Days Of JavaScript';

    console.log('Exercises: String Part');
    console.log(challenge);
    console.log(challenge.length);
    console.log(challenge.toUpperCase());
    console.log(challenge.toLowerCase());
    console.log(challenge.substr(3, 4));
    console.log(challenge.substr(3));
    console.log('You cannot end a sentence with because because because is a conjunction'.substr(31, 23));
    console.log(challenge.includes('Script'));
    console.log(challenge.split(' '));
    console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', '));
    console.log(challenge.replace('JavaScript', 'Python'));
    console.log(challenge.charAt(15));
    console.log(challenge.charCodeAt(challenge.indexOf('J')));
    console.log(challenge.indexOf('a'));
    console.log(challenge.lastIndexOf('a'));
    console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
    console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
    console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));
    console.log('                  30 Days Of JavaScript              '.trim());
    console.log(challenge.startsWith('30'));
    console.log(challenge.endsWith('Script'));
    console.log(challenge.match(/a/gi));
    console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/gi).length);
    console.log('30 Days of '.concat('JavaScript' ));
    console.log(challenge.repeat(2));
    console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi).length);

    const numbers = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.match(/\d+/g);
    const annualIncome = parseInt(numbers[0]) * 12 + parseInt(numbers[2]) * 12 + parseInt(numbers[1]);

    console.log(annualIncome);

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching';

    console.log(sentence.replace(/[%$@#&]/g, ''));
    console.log();
    console.log('Exercises: Data types Part');

    const firstName = 'John', lastName = 'Ayling', year = 1979;

    console.log(typeof firstName, typeof lastName, typeof year);
    console.log('Arithmetic Operators Part');

    const operandOne = 4;
    const operandTwo = 3;

    console.log(operandOne + operandTwo);
    console.log(operandOne * operandTwo);
    console.log(operandOne / operandTwo);
    console.log(operandOne % operandTwo);
}