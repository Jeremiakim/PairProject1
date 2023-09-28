const { Package, Transaction, Profile } = require("../models/");
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
  //! Show Package
  static showPackage(req, res) {
    const { id } = req.params;

    Package.findByPk(id)
      .then((product) => {
        // Ubah 'package' menjadi 'product' atau nama lain yang sesuai
        if (!product) {
          res.status(404).send("Paket tidak ditemukan");
        } else {
          res.render("packageF", { product });
        }
      })
      .catch((err) => {
        res.status(500).send("Terjadi kesalahan");
      });
  }
  //! Calculate
  static calculateTotalPrice(req, res) {
    const { id, quantity } = req.body;

    Package.findByPk(id)
      .then((product) => {
        // Ubah 'package' menjadi 'product' atau nama lain yang sesuai
        if (!product) {
          res.status(404).send("Paket tidak ditemukan");
        } else {
          const totalPrice = product.calculateTotalPrice(quantity);
          res.render("total_price", { product, quantity, totalPrice });
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
  //! transaksi table
  static showTransactions(req, res) {
    Transaction.findAll({
      attributes: ["id", "date", "total_price"],
      include: {
        model: Profile,
        attributes: ["name"],
      },
    })
      .then((transactions) => {
        
        res.render("transactions", { transactions });
      })
      .catch((err) => {
        res.send(err);
      });
  }
}


module.exports = Controller;
