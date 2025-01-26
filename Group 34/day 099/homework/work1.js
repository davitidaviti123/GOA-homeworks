const greet = (name) => {
    if (name == ""){
        return "Hello, spectator"
    }
    else{
        return "Hello, " + name
    }
}
console.log(greet(""))
console.log(greet("davit"))