const btn = document.getElementById("btn");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

const maxYear = 2025;

const yearsOrNot = () => {
    let inputYear = parseInt(n3.value);
    if (inputYear >= maxYear) {
        return false;
    } else if (inputYear < 0) {
        return false;
    } else {
        return true;
    }
}

btn.addEventListener("click", function() {
    if (yearsOrNot() === true) {
        let inputYear = parseInt(n3.value);
        let calculatedYears = 2024 - inputYear;
        years.innerText = `${calculatedYears} years`;
    } else {
        years.innerText = "-- years";
    }
});