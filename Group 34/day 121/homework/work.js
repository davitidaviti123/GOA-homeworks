function greet(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

greet("giorgi", () => {
    console.log("Greeting message displayed.");
});



function delayedMessage(message, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, 2000);
}

delayedMessage("Processing completed.", () => {
    console.log("Process finished successfully.");
});



function squareNumbers(numbers, callback) {
    setTimeout(() => {
        const squaredNumbers = numbers.map(num => num * num);
        callback(squaredNumbers);
    }, 2000);
}

squareNumbers([1, 2, 3, 4], result => {
    console.log("Squared Nums:", result);
});



function changeColor(color, callback) {
    setTimeout(() => {
        document.body.style.color = color;
        callback();
    }, 2000);
}
changeColor("red", () => {
    console.log("Text color changed to red.");
});



function getUserInput(callback) {
    const name = prompt("Enter your name:");
    setTimeout(() => {
        callback(name);
    }, 3000);
}

getUserInput(name => {
    alert(`Congratulations, ${name}! You have helped successfully.`);
});