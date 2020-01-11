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
    ];

    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
    ];

    const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

    // 7
    for (let i = 1; i <= 7; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += '#';
        }

        console.log(line);
    }
}