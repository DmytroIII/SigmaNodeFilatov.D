
module.exports = {
    mathAdd: (a,b) => isNaN(a) || isNaN(b) ? "Ви ввели не числове значення": a+b,
    mathSub: (a,b) => isNaN(a) || isNaN(b) ? "Ви ввели не числове значення": a-b,
    mathMul: (a,b) => isNaN(a) || isNaN(b) ? "Ви ввели не числове значення": a*b,
    mathDiv: (a,b) => isNaN(a) || isNaN(b) ? "Ви ввели не числове значення" : (b !== 0 ? a / b : "Ділення на 0 неможливе")
}



