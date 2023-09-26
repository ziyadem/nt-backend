const pool = require("../../db/db_config")


const getUsers = async () => {
    let users = await pool.query(`select * from users`)
    return users.rows
}

const getUser = async ({ userId }) => {
    let foundedUser = await pool.query(`select * from users where id = $1`, [userId])
    return foundedUser.rows[0]

}


const createUser = async (args) => {
    const { username, user_surname,  email, password, age, user_role } = args
    let users = await getUsers()
    let foundedUser = users.find(u => u.user_email === email)
  

    if (foundedUser) return { msg: 'User already exists!' }

    await pool.query(`INSERT INTO users(id, user_name, user_email, user_password, user_age, user_surname, user_role) VALUES($1, $2, $3, $4, $5, $6, $7)`, [users.length + 10, username, email, password, age, user_surname, user_role])
    return { msg: 'User created!' }


}

const deleteUser = async ({ id }) => {
    let foundedUser = await getUser({ userId: id})
    if (!foundedUser) return { msg: 'User not found!' }

    await pool.query(` DELETE FROM users WHERE id = $1 `, [id])
    return { msg: 'Deleted user!' }
}

const updateUser = async ({ id, username, user_surname,  email, password, age, user_role }) => {
    let foundedUser = await getUser({ userId: id})

    if(!foundedUser) return { msg: 'User not found!' }

    console.log(foundedUser);

    username = username ? username : foundedUser.user_name
    password = password ? password : foundedUser.user_password
    email = email ? email : foundedUser.user_email
    age = age ? age : foundedUser.user_age
    user_surname = user_surname ? user_surname : foundedUser.user_surname

    await pool.query(`UPDATE users set user_name = $1, user_password = $2, user_email = $3, user_age = $4, user_surname = $5 WHERE id = $6`, [username, password, email, age, user_surname, id])
    return { msg: "Updated user!" }
}




module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}