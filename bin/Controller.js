const mongoose = require("mongoose");
const Actividades = require("./models/Actividades");
const Cursos = require("./models/Cursos");
const Evaluaciones = require("./models/Evaluaciones");
const Modulos = require("./models/Modulos");
const Niveles = require("./models/Niveles");
const Recursos = require("./models/Recursos");
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
    setUsuarios(usuario, res){
        Usuarios.create(usuario,function(err, newUser) {
            if (err) throw err;
            res.send({status:200, nU: newUser});
        {}});
    }
    getUsuarios(res){
        Usuarios.find({}).populate({
            path: 'id_curso',
            Model: 'Cursos'
        }).select({
            'nombre1': 1,
            'nombre2': 1,
            'apellido1': 1,
            'apellido2': 1,
            'correo' : 1
        }).exec( (err, users) => {
            if(err) throw err;
            console.log(users)
            res.send(users);
        });
    }
    getUsuario(id,res) {
        Usuarios.find({_id:id}, (err, user) => {
            if (err) throw err;
            res.send(user);
        });
    }
    setCursoToUsuario(ids, res){
        Usuarios.updateOne({
            _id: ids.user
        }, {
            $push: { "id_curso": ids.curso }
        }, { new: true })
        .then(rawResponse => {
            res.send({
                message: 'Usuario Actualizado',
                raw: rawResponse
            });
        }).catch (err => {
            if (err) throw err
        })
    }
    updateUsuarios (id, usuario, res) {
        Usuarios.updateOne({
            _id: id
        }, {
            $set: {
               ...usuario
            }
        }).then(rawResponse => {
            res.send({
                message: 'Usuario Actualizado',
                raw: rawResponse
            });
        }).catch (err => {
            if (err) throw err
        })
    }
    delUsuario (id, res) {
        Usuarios.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send('Usuario eliminado!')
            }
        )
    }

    getActividades (res) {
        Actividades.find({}, (err, actividades) => {
            if (err) throw err;
            res.send(actividades)
        })
    }
    setActividad (act, res) {
        Actividades.create(act, (err, newAct) => {
            if (err) throw err;
            res.send({status: 200,nA: newAct});
        });
    }
    getActividad(id,res) {
        Actividades.find({_id:id}, (err, actividades) => {
            if (err) throw err;
            res.send(actividades);
               });
    }
    updateActividad(act, res) {
        Actividades.updateOne({
            _id: actividades.id
        }, {
            $set: {
                nombre1: actividades.nombre1
            }
        }).then(rawResponse => {
            res.send({
                message: 'Actividades Actualizadas',
                raw: rawResponse
            });
        }).catch (err => {
            if (err) throw err
        })
    }
    delActividad (id, res) {
        Actividades.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send('Actividad eliminada!')
            }
        )
    }
    getCursos (res) {
        Cursos.find({}, (err, cursos) => {
            if (err) throw err;
            res.send(cursos)
        })
    }
     setCursos(cursos, res){
        Cursos.create(curso,function(err, newCurso) {
            if (err) throw err;
            res.send({status:200, nC: newCurso});
             });
    }
    updateCursos (curso, res) {
        Cursos.updateOne({
            _id: curso.id
        }, {
            $set: {
                nombre1: curso.nombre1
            }
        }).then(rawResponse => {
            res.send({
                message: 'Curso Actualizado',
                raw: rawResponse
            });
        }).catch (err => {
            if (err) throw err
        })
    }
    delCursos (id, res) {
        Cursos.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send('Curso eliminado!')
            }
        )
    }
     setUEvaluaciones(evaluaciones, res){
        Evaluaciones.create(evaluaciones,function(err, newEval) {
            if (err) throw err;
            res.send({status:200, nE: newEval});
             });
    }
    getEvaluaciones(res){
        Evaluaciones.find({}, (err, evaluaciones) => {
            if(err) throw err;
            res.send(evaluaciones);
        });
    }
    getEvaluacione(id,res) {
        Evaluaciones.find({_id:id}, (err, evaluaciones) => {
            if (err) throw err;
            res.send(evaluaciones);
               });
    }
    updateEvaluaciones (evaluaiones, res) {
        Evaluaciones.updateOne({
            _id: evaluaciones.id
        }, {
            $set: {
                nombre1: evaluaciones.nombre1
            }
        }).then(rawResponse => {
            res.send({
                message: 'Evaluaciones Actualizadas',
                raw: rawResponse
            });
        }).catch (err => {
            if (err) throw err
        })
    }
    delEvaluaciones (id, res) {
        Evaluaciones.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send('Evaluaciones eliminadas!')
            }
        )
    }
    getModulos (res) {
        Modulos.find({}, (err, modulos) => {
            if (err) throw err;
            res.send(modulos)
        })
    }
     setModulos(modulos, res){
        Modulos.create(modulos,function(err, newmodulos) {
            if (err) throw err;
            res.send({status:200, nM: newmodulos});
        });
    }
    updateModulos (modulos, res) {
        Modulos.updateOne({
            _id: modulos.id
        }, {
            $set: {
                nombre1: modulos.nombre1
            }
        }).then(rawResponse => {
            res.send({
                message: 'Modulos Actualizados',
                raw: rawResponse
            });
        }).catch (err => {
            if (err) throw err
        })
    }
 updateActividad (id, actividad, res) {
        Actividades.updateOne({
            _id: id
        }, {
            $set: {
                nombre: actividad.nombre
            }
        }).then(rawResponse => {
            res.send({
                message: 'Actividades Actualizadas',
                raw: rawResponse
            });
        }).catch (err => {
            if (err) throw err
        })
    }
    delModulos (id, res) {
        Modulos.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send('Modulos eliminados!')
            }
        )
    }
    getNiveles (res) {
        Niveles.find({}).populate('id_curso').exec( (err, niveles) => {
            if (err) throw err;
            res.send(niveles)
        })
    }
     setNiveles(niveles, res){
        Niveles.create(niveles,function(err, newNiveles) {
            if (err) throw err;
            res.send({status:200, nN: newNiveles});
             });
    }
    getUNiveles(id,res) {
        Niveles.find({_id:id}, (err, niveles) => {
            if (err) throw err;
            res.send(niveles);
               });
    }
    updateNiveles (niveles, res) {
        Niveles.updateOne({
            _id: niveles.id
        }, {
            $set: {
                nombre1: niveles.nombre1
            }
        }).then(rawResponse => {
            res.send({
                message: 'Niveles Actualizados',
                raw: rawResponse
            });
        }).catch (err => {
            if (err) throw err
        })
    }
    delNiveles (id, res) {
        Niveles.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send('Niveles eliminados!')
            }
        )
    }
    getRecursos (res) {
        Recursos.find({}, (err, recursos) => {
            if (err) throw err;
            res.send(recursos)
        })
    }
    getNivelesUsuario (res, idC, idU) {
     Niveles.find({
         id_curso: idC
     }, (err, curso) => {
         if (err) throw err;
         Cursos.find({
             id_usuario: idU
         })
         .populate ({
             path: "id_usuario",
             select: "nombre1 apellido1"
         })
         .exec( (err, user) => {
             if (err) throw err;
             res.send(user)
         })
     })
    }
    createModulo(res, modulo) {
        Modulos.create(
            modulo,
            (err, newModulo) => {
                if (err) throw err;
                res.send({
                    msg: 'Creado',
                    response: newModulo
                })
            }
        )
    }
    getModulosNivel(res, idN) {
        Modulos.find({
            id_nivel: idN
        }, (err, modulo) => {
            if (err) throw err;
            res.send(modulo)
        })
    }
     setRecursos(recursos, res){
        Recursos.create(recursos,function(err, newRecursos) {
            if (err) throw err;
            res.send({status:200, nR: newRecursos});
             });
    }
    createNivel(res, nivel) {
        Niveles.create(nivel, (err, newNivel)=> {
            if (err) throw err;
            res.send(
                {
                    msg: 'Creado',
                    n: newNivel
                }
            )
        })
    }
    updateRecursos (recursos, res) {
        Recursos.updateOne({
            _id: recursos.id
        }, {
            $set: {
                nombre1: recursos.nombre1
            }
        }).then(rawResponse => {
            res.send({
                message: 'Recursos Actualizados',
                raw: rawResponse
            });
        }).catch (err => {
            if (err) throw err
        })
    }
    delRecursos (id, res) {
        Recursos.deleteOne(
            {
            _id: id
            }, function (err) {
                if (err) throw err;
                res.send('Recursos eliminados!')
            }
        )
    }
    createActividad(res, actividad) {
        Actividades.create(
            actividad, (err, newAct) => {
                if (err) throw err;
                res.send({
                    msg: 'Creado',
                    act: newAct
                })
            }
        )
    }
}

exports.Controller = new Controller