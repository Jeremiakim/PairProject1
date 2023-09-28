const {Package} = require("../models/");


class Controller {
  //home
  static showHome(req, res) {
    Package.findAll()
      .then((data) => {
        // res.send(data)
        console.log(data[0]);
        res.render("home", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  //show form
  static showForm(req, res) {
    res.render("showForm");
  }
  //add paket
  static addPackage(req, res) {
    const { name, description, price, category, image } = req.body;
    Package.create({
      name,
      description,
      price,
      category,
      image
    })
      .then((_) => {
        res.redirect("/");
      })
      .catch((err) => {
        res.send(err);
      });
  }
}


module.exports = Controller;
