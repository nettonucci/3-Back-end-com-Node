const express = require("express");

const app = express();

/**
 * 5 - Métodos HTTP
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar uma informção do back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

app.get("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.put("/projects/:id", (request, response) => {
  return response.json(["Projeto 4", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 2", "Projeto 3"]);
});

/**
 * 5 - Métodos HTTP
 */


/**
 * 3 - Criando Projeto Node
 */
app.listen(3333, () => {
  console.log("🚀 Server is running!");
});

/**
 * 4 - Configurando Nodemon
 */
