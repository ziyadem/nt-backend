const fs = require("fs");
const path = require("path");

const users = require("../database/users.json");

module.exports = {
  POST: (req, res) => {
    try {
      const { firstname, username, email } = req.body;
      const user = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        firstname,
        username,
        email,
      };
      users.push(user);
      fs.writeFileSync(
        path.join(process.cwd(), "database", "users.json"),
        JSON.stringify(users, null, 4)
      );
      res.send({ data: "user added", location: "index" });
    } catch (error) {
      res.send({ err: error.message });
    }
  },
};
