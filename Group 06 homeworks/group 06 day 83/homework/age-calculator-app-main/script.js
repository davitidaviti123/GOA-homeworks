const btn = document.getElementById("btn");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");                  // Bringing elements for use
const n3 = document.getElementById("n3");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

const maxYear = 2025;

const yearsOrNot = () => { // Checking if years exist
    let inputYear = parseInt(n3.value);
    if (inputYear >= maxYear) {
        return false;
    } else if (inputYear < 0) {
        return false;
    } else {
        return true;
    }
};
const maxMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];// Months array
const monthsOrNot = () => { // Checking if the month exists
    let inputMonth = parseInt(n2.value);
    for (let i = 0; i < maxMonth.length; i++) {
        if (maxMonth[i] === inputMonth) {
            return true;
        }
    }
    return false;
};
const daysOrNot = () => {
    let inputDay = parseInt(n1.value);  // Assuming n1 is the day input
    let inputMonth = parseInt(n2.value);  // Assuming n2 is the month input
    let inputYear = parseInt(n3.value);  // Assuming n3 is the year input

    // Get the number of days in the provided month and year
    let daysInMonth = new Date(inputYear, inputMonth, 0).getDate(); 
    
    // Check if inputDay is within the valid range for the selected month
    return inputDay > 0 && inputDay <= daysInMonth;
};
btn.addEventListener("click", function () {
    // Get the current date
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; // Month is 0-indexed, so add 1
    let currentDay = currentDate.getDate();

    // Get the input values
    let inputYear = parseInt(n3.value);
    let inputMonth = parseInt(n2.value);
    let inputDay = parseInt(n1.value);

    // Calculate Year Difference
    let calculatedYears = currentYear - inputYear;

    // Calculate Month Difference
    let calculatedMonths = currentMonth - inputMonth;
    if (calculatedMonths < 0) {
        calculatedMonths += 12;  // Adjust if negative
        calculatedYears--;  // Decrease the year if we had to borrow months
    }

    // Calculate Day Difference
    let calculatedDays = currentDay - inputDay;
    if (calculatedDays < 0) {
        // Borrow days from the previous month
        let previousMonth = currentMonth - 1;
        let previousMonthYear = currentYear;
        
        if (previousMonth === 0) {
            previousMonth = 12;  // Go back to December if we crossed the year boundary
            previousMonthYear--;  // Adjust the year accordingly
        }

        let daysInPreviousMonth = new Date(previousMonthYear, previousMonth, 0).getDate();  // Get days in the previous month
        calculatedDays += daysInPreviousMonth;  // Adjust by adding the days of the previous month
        calculatedMonths--;  // Decrease the month if we had to borrow days

        if (calculatedMonths < 0) {
            calculatedMonths += 12;  // Adjust if negative
            calculatedYears--;  // Decrease the year if we had to borrow months
        }
    }

    // Display Results
    if (calculatedYears >= 0) {
        years.innerText = `${calculatedYears} years`;
    } else {
        years.innerText = "-- years";
    }

    if (calculatedMonths >= 0) {
        months.innerText = `${calculatedMonths} months`;
    } else {
        months.innerText = "-- months";
    }

    if (calculatedDays >= 0) {
        days.innerText = `${calculatedDays} days`;
    } else {
        days.innerText = "-- days";
    }
});