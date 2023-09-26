const pool = require("../../db/db_config")


const getCars = async () => {
    // let courses = await pool.query(`select * from cars`)
    return  [
        {
            id: "1",
            title: "Maluba",
            price: "32000"
        },
        {
            id: "2",
            title: "Cobalt",
            price: "45000"
        }
    ]
}

const getCar = async (_, args) => {
    console.log(args);
    const { carId } = args
    // let foundedCourse = await pool.query(`select * from car where id = $1`, [carId])
    let cars =  [
        {
            id: "1",
            title: "Maluba",
            price: "32000"
        },
        {
            id: "2",
            title: "Cobalt",
            price: "45000"
        }
    ]
    
    let car = cars.find(c => c.id == carId)
    return car

}

module.exports = {
    getCars, 
    getCar
}