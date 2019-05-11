module.exports = {
  register: (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    db.create_user([username, password]).then(user => {
      res.status(200).send(user);
    });
  },
  login: (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    let userFound = db.check_user_exists([username, password]);
    if (!userFound[0]) {
      res
        .status(200)
        .send("username or password were not found. Please try again!");
    }

    res.sendStatus(200).send(userFound);
    // } else {
    //   res.status(200).send("incorrect username/password");
    // }
  }
};
