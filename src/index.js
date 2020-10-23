const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(3333, () => {
  console.log("🚀 Server is running!");
});
/**
 * 3 - Criando Projeto Node
 */

/**
 * 4 - Configurando Nodemon
 */
