const {mathSub, mathAdd, mathDiv, mathMul} = require ("arifmeth_dz2_filatov");

const [, , a, b] = process.argv;

const numA = parseFloat(a);
const numB = parseFloat(b);

    console.log("Результати:");
    console.log("Віднімання:", mathSub(numA, numB));
    console.log("Додавання:", mathAdd(numA, numB));
    console.log("Ділення:", mathDiv(numA, numB));
    console.log("Множення:", mathMul(numA, numB));
