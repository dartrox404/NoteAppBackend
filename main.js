const server = require("express");
const client = server();
const cors = require("cors");
const database = require("./config/db");
const router = require("./routes/app_route");
require("dotenv").config();
database();
client.use(cors());
client.use(server.json());
client.get("/", (req, res) => {
  res.send("Boah! Api are working fine..........");
});
client.use("/api/note", router);
client.listen(process.env.PORT, () => {
  console.log(
    `Server is running successfully on http://localhost:${process.env.PORT}`,
  );
});
