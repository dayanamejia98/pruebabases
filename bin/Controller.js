 const mongoose = require("mongoose");
const Actividades = require("./models/Actividades");
const Cursos = require("./models/Cursos");
const Evaluaciones = require("./models/Evaluaciones");
const Modulos = require("./models/Modulos");
const Niveles = require("./models/Niveles");
const Recursos = require("./models/Recursos");
const Redes = require("./models/Redes");
const Usuarios = require("./models/Usuarios");

class Controller {
    constructor() {
        this.connect();
    }
    async connect() {
        try {
            await mongoose.connect(
                "mongodb+srv://dayo:admin@cluster0-3i9cn.mongodb.net/proyecto?retryWrites=true&w=majority",
                { useNewUrlParser: true }
            );
            console.log("Conectado!")

        } catch (e) {
            console.error(e)
        }
    }
    setUsuarios(usuarios, res){
        Usuarios.create(usuarios,function(err, newUser) {
            if (err) throw err;
            res.send({status:200, nU: newUser});
             });
    }
    getUsers(res){
        Usuarios.find({}, (err, users) => {
            if(err) throw err;
            res.send({allUsers: users});
        });
    }
    getUsuarios(id,res) {
        Usuarios,find({_id:id}, (err, user) => {
            if (err) throw err;
            res.send({User: user});
               });
    }

    getActividades (res) {
        Actividades.find({}, (err, actividades) => {
            if (err) throw err;
            res.send(actividades)
        })
    }
    getCursos (res) {
        Cursos.find({}, (err, cursos) => {
            if (err) throw err;
            res.send(cursos)
        })
    }
    getEvaluaciones (res) {
        Evaluaciones.find({}, (err, evaluaciones) => {
            if (err) throw err;
            res.send(evaluaciones)
        })
    }
    getModulos (res) {
        Modulos.find({}, (err, modulos) => {
            if (err) throw err;
            res.send(modulos)
        })
    }
    getNiveles (res) {
        Niveles.find({}, (err, niveles) => {
            if (err) throw err;
            res.send(niveles)
        })
    }
    getRecursos (res) {
        Recursos.find({}, (err, recursos) => {
            if (err) throw err;
            res.send(recursos)
        })
    }
    getRedes (res) {
        Redes.find({}, (err, redes) => {
            if (err) throw err;
            res.send(redes)
        });
    }
    getUsuarios (res) {
        Usuarios.find({}, (err, usuarios) => {
            if (err) throw err;
            res.send(usuarios)
        })
    }
}

exports.Controller = new Controller