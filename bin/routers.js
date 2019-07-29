const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const {
  Controller
} = require("./Controller");

app.get('/', (req, res) => {
  res.send(`
    <center>
      <h1 style="font-family;´Helvetica´">BIENVENIDOS A EDUCASEÑA!</h1>
    </center>
  `)
});

app.post("/users", function (req, res) {
  let usuarios = req.body;
  Controller.setUsuarios(usuarios, res);
});

app.get("/users", (req, res) => {
  Controller.getUsers(req, res);
});
app.get("/users/:id", function (req, res) {
  let {id} = req.params;
  Controller.getUsuarios(id, res);
});

app.put("/users/:id", function (req, res) {
  let usuarios = req.body.user;
  usuarios.id = req.params.id;
  Controller.updateUsuarios(usuarios, res);
});

app.delete("/users/:id", function (req, res) {
  let { id } = req.params;
  Controller.deleteUsuarios(id, res);
});

app.post("/users/:usuarios_id/cursos", (req, res) => {
  let {usuarios_id } = req.params;
  let { cursos } = req.body;
  Controller.setUsercursos(usuarios_id, cursos, res);
});

app.get('/actividades', (req, res) => {
  Controller.getActividades(res);
})
app.get('/cursos', (req, res) => {
  Controller.getCursos(res)
})
app.get('/evaluaciones', (req, res) => {
  Controller.getEvaluaciones(res)
})
app.get('/modulos', (req, res) => {
  Controller.getModulos(res)
})
app.get('/niveles', (req, res) => {
  Controller.getNiveles(res)
})
app.get('/recursos', (req, res) => {
  Controller.getRecursos(res)
})
app.get('/redes', (req, res) => {
  Controller.getRedes(res)
})
app.get('/usuarios', (req, res) => {
  Controller.getUsuarios(res)
})

exports.app = app;