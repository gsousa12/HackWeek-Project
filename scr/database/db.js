const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Esperando conexão com servidor");

  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.ay5vvnl.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Conectado ao servidor"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
