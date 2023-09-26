

//update user
const updateUser = async (req, res) => {
 console.log(req);
};

const getUser= async (req, res) => {
  try {
    let userList = await pool.query(` SELECT * FROM users `);

    res.status(200).json(userList.rows);
  } catch (err) {
    console.log(err);
  }
};


module.exports = { updateUser, getUser };
