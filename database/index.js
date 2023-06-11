const mongoose = require("mongoose");
require("dotenv").config();

const CONEXAO = process.env.URL_MONGO;
console.log(CONEXAO);

mongoose
  .connect(CONEXAO, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("MONGODB está funcionando!");
  })
  .catch((error) => {
    console.log(`MONGODB parou, por causa do erro: ${error}`);
  });


  
mongoose.Promise = global.Promise;
module.exports = mongoose;