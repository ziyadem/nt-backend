const pool = require("../../db/db_config")
const jwt = require("jsonwebtoken")


const getCourses = async () => {
    let courses = await pool.query(`select * from courses`)
    return courses.rows
}

const getCourse = async (_, args, req) => {
    const { courseId } = args
    console.log(req.test);
    let foundedCourse = await pool.query(`select * from courses where id = $1`, [courseId])
    return foundedCourse.rows[0]

}

const createCourse = async (args, context) => {
    const { course_title,
        course_price,
        course_teacher_id,
        course_description } = args

        let userInfo = await jwt.verify(context.token, 'secret_key')

        console.log(context);

        await pool.query(`INSERT INTO courses(
            course_title,
            course_price,
            course_teacher_id,
            course_description,
            created_by_user_id

        ) VALUES($1, $2, $3, $4, $5)`, [ 
            course_title,
            course_price,
            course_teacher_id,
            course_description,
            userInfo.id
        ])

        return { msg: 'Created course!' }

}

module.exports = {
    getCourse,
    getCourses,
    createCourse
}