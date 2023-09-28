const {Package} = require("../models/");


class Controller {
  static showHome(req, res) {
    console.log(typeof Package);
    Package.findAll()
    .then((data) => {
      // res.send(data)
      console.log(data[0])
      res.render("home", { data });
    })
    .catch((err) => {
      res.send(err);
    });
  }

}


module.exports = Controller;
