var player1 = 'Ontu';
var player2 = 'Montu';

console.log(`We have ${player1} and ${player2} in our cricket team`);

function modifier(strings, ...values) {
    // console.log(strings);
    // console.log(values);
    const m = strings.reduce((prev, curr) => {
        return prev + curr + (values.length ? 'Mr. ' + values.shift() : '')
    }, '');
    return m;
}

console.log(modifier`We have ${player1} and ${player2} in our cricket team`);