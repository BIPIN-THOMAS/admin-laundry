const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Data base connected successfully"))
    .catch((error) => console.log("Data base connection error", error));
};
module.exports = connectDb