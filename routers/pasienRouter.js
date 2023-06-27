const router = require("express").Router();
const PasienController = require("../controllers/pasienController");

router.get("/", PasienController.getPasien);
router.post("/create", PasienController.addPasien);
router.delete("/delete", PasienController.deletePasien);
router.put("/update", PasienController.updatePasien);

module.exports = router;
