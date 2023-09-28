const {Package} = require("../models/");
const { currencyFormatter } = require("../helper/index");


class Controller {
  //! Home--
  static showHome(req, res) {
    const { position } = req.query;

    Package.getCategory(position)
      .then((data) => {
        return data; 
      })
      .then((data) => {
        res.render("home", { data, currencyFormatter });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  //! Show form --
  static showForm(req, res) {
    res.render("showForm");
  }
  //! Add Package
  static addPackage(req, res) {
    const { name, description, price, category, image } = req.body;

    Package.create({
      name,
      description,
      price,
      category,
      image,
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
