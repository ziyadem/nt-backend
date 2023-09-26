const fs = require("fs")
const path = require("path")


const read = (fileName) => {
    return JSON.parse(fs.readFileSync(`./db/${fileName}.json`))
    
}

const write = (fileName, data) => {
    fs.writeFileSync( `./db/${fileName}.json`), JSON.stringify(data, null, 4)
}

module.exports = {
    read,
    write
}