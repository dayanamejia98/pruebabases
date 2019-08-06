const express = require("express");
const path = require("path")
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.set("views",path.join(__dirname,"views"))
app.set("view engine", "pug")
const {
  Controller
} = require("./Controller");

app.get('/', (req, res) => {
  res.render('index')
});

app.post("/users", function (req, res) {
  let usuario = req.body.usuario;
  Controller.setUsuarios(usuario, res);
});
app.put("/users/:id", (req, res) => {
    let { id } = req.params;
    let {usuario} = req.body;
    Controller.updateUsuarios (id, usuario, res);
})
app.get("/users", (req, res) => {
  Controller.getUsuarios(res);
});
app.get("/users/:id", function (req, res) {
  let {id} = req.params;
  Controller.getUsuario(id, res);
});

app.post("/user/:id/:curso", (req, res) => {
    let ids = {
        user: req.params.id,
        curso: req.params.curso
    }
    Controller.setCursoToUsuario(ids, res);
})

app.post("/users/:id", function (req, res) {
  let usuario = req.body.usuario;
  id = req.params.id;
  Controller.updateUsuarios(id, usuario, res);
});

app.delete("/users/:id", function (req, res) {
  let { id } = req.params;
  Controller.delUsuario(id, res);
});

app.post("/users/:usuarios_id/cursos", (req, res) => {
  let {usuarios_id } = req.params;
  let { cursos } = req.body;
  Controller.setUsercursos(usuarios_id, cursos, res);
});

app.get('/actividades', (req, res) => {
  Controller.getActividades(res);
})
app.post('/actividades', (req, res) => {
    let actividad = req.body.actividad;
    Controller.setActividad(res, actividad);
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
app.post("/modulos/:idNivel", (req, res) => {
    let { idNivel } = req.params;
    let { modulo } = req.body;
    modulo.id_nivel = idNivel
    Controller.createModulo(res, modulo)
})
app.get('/niveles', (req, res) => {
  Controller.getNiveles(res)
})
app.get("/niveles/:idC/:idU", (req, res) => {
    let { idC, idU } = req.params;
    Controller.getNivelesUsuario(res, idC, idU);
})
app.get("/modulos/:idN", (req, res) => {
    let { idN } = req.params;
    Controller.getModulosNivel(res, idN);
})
app.get('/recursos', (req, res) => {
  Controller.getRecursos(res)
})
app.get('/usuarios', (req, res) => {
  Controller.getUsuarios(res)
})
app.post("/niveles/:idC", (req, res) => {
    let { idC } = req.params;
    let { nivel } = req.body;
    nivel.id_curso = idC
    Controller.createNivel(res, nivel)
})
app.post("/actividad/:idM", (req, res) => {
    let { idM } = req.params;
    let { actividad } = req.body;
    actividad.id_modulo = idM
    Controller.createActividad(res, actividad)
})
app.put("/actividad/:id", (req, res) => {
    let { id } = req.params;
    let {actividad} = req.body;
    Controller.updateActividad (id, actividad, res);
})
exports.app = app;