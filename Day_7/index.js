function showConsolog() {
    function solveQuadratic(a, b, c) {
        if (a === undefined || b === undefined || c === undefined) {
            return [0];
        }

        const result = [];
        const part1 = -b;
        const part2 = Math.sqrt(b * b - 4 * a * c);
        const part3 = 2 * a;

        result.push((part1 + part2) / part3);

        if (part2 !== 0) {
            result.push((part1 - part2) / part3);
        }

        return result;
    }

    function swapValues(x, y) {
        const temp = x.v;
        x.v = y.v;
        y.v = temp;
    }

    function isPrime(num) {
        if (Math.abs(num) < 2) {
            return false;
        }

        for (let i = 2; i < Math.abs(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}

    const x = {v: 4};
    const y = {v: 3};

    console.log(`x = ${x.v} and y = ${y.v}`);
    swapValues(x, y);
    console.log(`x = ${x.v} and y = ${y.v}`);

    for(let i = 1; i < 100; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}