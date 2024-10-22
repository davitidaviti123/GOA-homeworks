let btnAdd = document.getElementById("btn-add");
let btnRemove = document.getElementById("btn-remove");
let p1 = document.getElementById("p1");

btnAdd.addEventListener("click", function(){
    p1.textContent = "nothing"
})
btnRemove.addEventListener("click", function(){
    p1.textContent = " "
})