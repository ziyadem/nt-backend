module.exports = {
  CHECK: (req, res, next) => {
    try {
      const { firstname, username, email } = req.body;
      if (!firstname || !username || !email) throw new Error("Invalid datas");
      if (firstname.length < 3) throw new Error("Invalid fistname");
      if (username.length < 3 || !isNaN(+username))
        throw new Error("Invalid username");
      if (!email.includes("@")) throw new Error("Invalid email");
      console.log("check");
      return next();
    } catch (error) {
      res.send({ err: error.message });
    }
  },
  AUTH: (req, res, next) => {
    try {
      const { firstname, username, email } = req.body;
      if (!firstname || !username || !email) throw new Error("Invalid datas");
      if (firstname.length < 3) throw new Error("Invalid fistname");
      if (username.length < 3 || !isNaN(+username))
        throw new Error("Invalid username");
      if (!email.includes("@")) throw new Error("Invalid email");
      console.log("check");
      return next();
    } catch (error) {
      res.send({ err: error.message });
    }
  },
};
