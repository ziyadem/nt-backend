const fs=require('fs');

const readF=(fName)=>{
    return JSON.parse(fs.readFileSync(`src/db/${fName}`,'utf-8'))
}
const writeF = (fName, data) => {
  return fs.writeFileSync(
    `src/db/${fName}`,
    JSON.stringify(data, null, 4)
  );
};

module.exports = {
  readF,
  writeF,
};