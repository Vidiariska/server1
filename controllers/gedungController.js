const { Gedung } = require("../models");

class GedungController {
  //create
  static addGedung(req, res) {
    let object = {
      name: req.body.name,
      location: req.body.location,
      floor: req.body.floor,
    };

    Gedung.create(object)
      .then((_) => {
        res.status(200).json({ message: "succesfully create gedung" });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }

  static getGedung(req, res) {
    res.send("Hello vidia");
  }
  static updateGedung(req, res) {}
  static deleteGedung(req, res) {}
}

module.exports = GedungController;
