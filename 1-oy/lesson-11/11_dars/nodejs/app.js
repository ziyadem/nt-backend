// console.log(__dirname);

// console.log(process.cwd());


process.on("add", (a, b) => {
    console.log(a + b);
    return
})


// process.emit("add", 4, 5)


let res = process.binding("os")
console.log(res.getUserInfo());
console.log(res.getTotalMem());