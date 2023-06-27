const express = require("express");
const port = 4444;
const app = express();
const router = require("./routers");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`App is running on port ${port} succesfully`);
});
