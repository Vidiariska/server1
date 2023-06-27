const router = require("express").Router();
const GedungController = require("../controllers/gedungController");

router.get("/", GedungController.getGedung);
router.post("/create", GedungController.addGedung);
/***ketika menembak API gedung/create, 
dia akan mencari dan mencocokkan sesuai dengan URL dan method yang dikirim. dalam kasus ini, URLnya di postman itu post
jadi dia temukan di file ini ada post, dan isinya /create  */
router.delete("/delete", GedungController.deleteGedung);
router.put("/update", GedungController.updateGedung);

module.exports = router;
