const {Package} = require("../models/");
const { currencyFormatter } = require("../helper/index");


class Controller {
  //home
  static showHome(req, res) {
    const { position } = req.query;
    // console.log(req.query);
    Package.getCategory(position)
    .then((data) => {
        // res.send(data)
        res.render("home", { data, currencyFormatter });
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
      image,
    })
      .then((_) => {
        res.redirect("/");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static showDataEmployee(req, res) {
    const { position } = req.query;
    // console.log(req.query);
    Employee.getEmployeesByPosition(position)
      .then((DataEmployee) => {
        // res.send(DataEmployee)
        res.render("employee", { data: DataEmployee, currencyFormatter });
      })
      .catch((err) => {
        res.send(err);
      });
  }
}


module.exports = Controller;
