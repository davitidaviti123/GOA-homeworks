let p1 = document.getElementById("p1");
let input1 = document.getElementById("work1-input");         
let btn1 = document.getElementById("work1-btn");                   //work1
function changeP(){
    p1.textContent = input1.value
};
btn1.addEventListener("click", changeP);


document.addEventListener("DOMContentLoaded", function() {
    let p2 = document.getElementById("p2");
    let btn2 = document.getElementById("work2-btn");
    btn2.addEventListener("click", function(){
        p2.remove();
    });
});