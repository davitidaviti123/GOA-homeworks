while (true) {
    let a = parseFloat(prompt("First number:"));
    let b = parseFloat(prompt("Second number:"));
    alert(a * b);
    if (prompt("Exit?") === "exit") break;
}