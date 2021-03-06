module.exports = function (app) {
    var valida = require('./../middlewares/valida');
    var cursos = app.controllers.cursos;

    app.get('/menu', valida, cursos.menu);

    app.get('/cadUsuario', valida, cursos.cadastroUsuario);
    app.get('/cadCurso', valida, cursos.cadastroCurso);
    app.get('/listaCursos', valida, cursos.listaCursos);

    app.post('/novoCurso', cursos.novoCurso);
};