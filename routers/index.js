const router = require("express").Router(); //untuk memanggil router yang dibuat oleh express
const gedungRouter = require("./gedungRouter");
const pasienRouter = require("./pasienRouter");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.use("/gedung", gedungRouter);

module.exports = router;
