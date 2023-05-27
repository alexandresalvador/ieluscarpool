const mongoose = require("mongoose");
require("dotenv").config();
const CONEXAO = process.env.URL_MONGO;
console.log(CONEXAO);

mongoose
  .connect(CONEXAO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /* useCreateIndex: true,
    useFindAndModify: false, */
  })
  .then(() => {
    console.log("MONGODB está funcionando!");
  })
  .catch((error) => {
    console.log(`MONGODB parou, por causa que ${error}`);
  });

mongoose.Promise = global.Promise;
module.exports = mongoose;