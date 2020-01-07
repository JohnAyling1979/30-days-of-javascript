function showConsolog() {
    const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
    ]

    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
    ]

    const emptyArray = [];
    const arr = [54, 7, 56, 3524, 32, 78, 2, 78, 354];
    const first = arr[0];
    const last = arr[arr.length -1];
    const mid = arr[(arr.length -1) / 2];
    console.log(first, mid, last);

    const mixedDataTypes = [true, 42, 'West', {url: 'google.com'}, 3.14, [1, 2, 3]];
    console.log(mixedDataTypes.length);

    const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

    console.log(itCompanies);
    console.log(itCompanies.length);
    itCompanies.forEach(company => console.log(company));
    itCompanies.forEach(company => console.log(company.toUpperCase()));
}