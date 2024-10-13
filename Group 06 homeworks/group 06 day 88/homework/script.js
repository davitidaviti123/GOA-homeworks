btn = document.getElementById("current-date");
btn.addEventListener("click", function(){
    let newDate = new Date();
    console.log(`current date: ${newDate}`);
});
function getPrompts() {
    let prompt1 = prompt("Enter the start date (YYYY-MM-DD)");
    let prompt2 = prompt("Enter the second date (YYYY-MM-DD)");

    // Convert to Date objects
    let date1 = new Date(prompt1);
    let date2 = new Date(prompt2);

    // Calculate the difference in milliseconds and if it will be negative, it will become positive to show the difference between two dates
    let timeDiff = Math.abs(date2 - date1);

    // Convert milliseconds to days
    let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // Print the result in the console
    console.log(`Number of days between the two dates: ${dayDiff}`);
}

// Get current date and log it in the console
document.getElementById('current-date').addEventListener('click', function() {
    let currentDate = new Date();
    console.log(`Current Date: ${currentDate.toISOString().split('T')[0]}`);
});

document.getElementById("calculate-difference").addEventListener('click', getPrompts);