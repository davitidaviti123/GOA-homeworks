const users = [
    { name: "davit", password: "12345" },
    { name: "gio", password: "qwerty" }
];

function validateForm() {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value.toLowerCase();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = parseInt(document.getElementById("age").value);

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email!");
        return false;
    }

    let userValid = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name && users[i].password === password) {
            userValid = true;
            break;
        }
    }
    if (!userValid) {
        alert("Invalid username or password!");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    if (age < 18) {
        alert("You must be at least 18 years old!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}