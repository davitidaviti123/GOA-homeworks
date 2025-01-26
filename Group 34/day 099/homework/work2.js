const plus = (num1,num2) => {
    if (num1 == ""){
        num1 = 0
    }
    if (num2 == ""){
        num2 = 5
    }
    return num1 + num2
}
console.log(plus("",""))
console.log(plus(10,4))