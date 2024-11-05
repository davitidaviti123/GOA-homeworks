const { readFile, writeFile } = require("fs")

const text = `
    andria yochag !
    temo gamarjoba !
`

writeFIle("./newapp.js", text, (err, res) => {
    if (err) {
        console.log("you got error: ", err)
        return;
    }
})