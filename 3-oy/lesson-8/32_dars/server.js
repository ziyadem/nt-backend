const express = require("express");
const pool = require("./db/config");


const app = express();


app.use(express.json());


app.get("/", async (req, res) => {

    try {
        let courseList = await pool.query(` SELECT * FROM courses `);

        res.status(200).json(courseList.rows);

    } catch (err) {
        console.log(err);
    }

});



app.post("/create", async (req, res) => {
    const {
        course_title,
        course_price,
        course_teacher_id,
        course_description,
        created_by_user_id
    } = req.body;
    let result = await pool.query(`INSERT INTO 
    courses(course_title, course_price, course_teacher_id, course_description, created_by_user_id) 
    VALUES($1, $2, $3, $4, $5)`, [course_title, course_price, course_teacher_id, course_description, created_by_user_id]);

    res.status(201).json({
        msg: 'Created!'
    })

})


app.get('/courses/:course_id', async (req, res) => {
    const { course_id } = req.params;

    let foundedCourse = await pool.query(` SELECT * FROM courses WHERE id = $1`, [course_id]);

    console.log(foundedCourse);

    if (foundedCourse.rows == [] || foundedCourse.rows.length === 0) return res.status(404).json({ msg: 'Course not found!' });

    res.status(200).json(foundedCourse.rows);

})


app.delete("/courses/:course_id", async (req, res) => {

    const { course_id } = req.params;

    let foundedCourse = await pool.query(` DELETE FROM courses WHERE id = $1`, [course_id]);

    console.log(foundedCourse);

    if (foundedCourse.rowCount === 0) return res.status(404).json({ msg: 'Course not found!' });

    res.status(200).json({
        msg: 'Course deleted!'
    });

})

app.put("/courses/:course_id", async (req, res) => {

    const { course_id } = req.params;
    let {
        course_title,
        course_price,
        course_teacher_id,
        course_description,
        created_by_user_id
    } = req.body;


    let foundedCourse = await pool.query(` SELECT * FROM courses WHERE id = $1`, [course_id]);

    console.log(foundedCourse);

    if (foundedCourse.rowCount === 0) return res.status(404).json({ msg: 'Course not found!' });

    const {
        course_title: title,
        course_price: price,
        course_teacher_id: teacher_id,
        course_description: desc,
        created_by_user_id: user_id
    } = foundedCourse.rows[0];


    course_title = course_title ? course_title : title;
    course_price = course_price ? course_price : price;
    course_teacher_id = course_teacher_id ? course_teacher_id : teacher_id;
    course_description = course_description ? course_description : desc;
    created_by_user_id = created_by_user_id ? created_by_user_id : user_id;

    let updatedCourse = await pool.query(` 
        UPDATE courses SET 
           course_title = $1,
           course_price = $2, 
           course_teacher_id = $3,
           course_description = $4, 
           created_by_user_id = $5 
        WHERE id = $6
    `, [course_title, course_price, course_teacher_id, course_description, created_by_user_id, course_id]);



    res.status(200).json({
        msg: 'Course Updated!'
    });

})

app.get('/api/:course_id', async (req, res) => {
    const { course_id } = req.params;

    let foundedCourse = await pool.query(` SELECT c.id, c.course_title, c.created_by_user_id as course_user_id, u.id as user_id, u.user_surname FROM courses c
   JOIN users u ON u.id = c.created_by_user_id
WHERE c.id = $1`, [course_id]);

    console.log(foundedCourse);

    if (foundedCourse.rows == [] || foundedCourse.rows.length === 0) return res.status(404).json({ msg: 'Course not found!' });

    res.status(200).json(foundedCourse.rows);

})

app.get('/api2/:course_id', async (req, res) => {
    const { course_id } = req.params;

    let foundedCourse = await pool.query(` SELECT c.id, c.course_title, c.created_by_user_id as course_user_id, u.id as user_id, u.user_surname, t.teacher_name FROM courses c
    JOIN users u ON u.id = c.created_by_user_id
    JOIN teachers t ON t.id = c.course_teacher_id
WHERE c.id = $1`, [course_id]);

    console.log(foundedCourse);

    if (foundedCourse.rows == [] || foundedCourse.rows.length === 0) return res.status(404).json({ msg: 'Course not found!' });

    res.status(200).json(foundedCourse.rows);

})






app.listen(4040, () => {
    console.log(4040);
})