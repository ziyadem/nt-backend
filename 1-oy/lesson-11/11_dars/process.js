/* 
 console.log(process);

*/

/* Eventemmitterda hodisa yaratsa ham bo`ladi
process.on("add", (a, b) => {
    console.log(a + b);
})

process.emit("add", 2, 9)
*/

/*
  process properties
        console.log(process.arch);
        console.log(process.argv);
        console.log(process.env);
        console.log(process.pid);
        console.log(process.platform);
        console.log(process.release);
        console.log(process.version);
        console.log(process.versions);
*/


/*
  Process Functions
        console.log(process.cwd());
        console.log(process.hrtime());
        console.log(process.memoryUsage());
        console.log(process.uptime());
*/

/*
  process.binding -> modulni processga bog`lash uchun ishlatiladi
    let res = process.binding("os")
    console.log(res);
*/