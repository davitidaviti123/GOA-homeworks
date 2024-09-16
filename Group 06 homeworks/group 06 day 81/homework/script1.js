let btn = document.getElementById("btn")
let text = document.getElementById("seperate-text")
let body = document.getElementById("body")

let hexSymbols = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

btn.addEventListener('click', () => {
    let hex = "#";
    for(let i = 0; i < 6, i ++) {
        hex += hexSymbols[Math.trunc(Math.random() * hexSymbols.length)]
    }
    body.style.background = hex
    text.textContent = hex
});