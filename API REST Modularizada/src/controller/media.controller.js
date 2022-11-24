const { response, request } = require("express");
const connection = require("../database")



// ***************************** OBTIENE LA NOTA MEDIA DEL ALUMNO CUYO ID PASES POR PARAMETRO**************************

function getMedia(request, response ) {
    let sql;
    if (request.query.id == null)
        console.log(err);
    else
        sql = "SELECT AVG (mark) AS media FROM marks WHERE student_id=" + request.query.id;

     
    connection.query(sql, function (err, result)
    {
        if (err)
            console.log(err);
        else
        {
            response.send(result);
        }    
    })  
};


// ****************OBTIENE LA LISTA DE ASIGNATURAS A LAS QUE ESTÁ APUNTADO EL ALUMNO CUYO ID PASES POR PARAMETRO,SI NO INTRODUCES ID, MUESTRA NOMBRES Y APELLIDOS DE TODOS LOS ALUMNOS Y LOS NOMBRES DE LAS ASIGNATURAS A LAS QUE ESTAN APUNTADOS.

function getApuntadas(request, response) {
    let sql;
    if (request.query.id == null)
        sql = "SELECT first_name,last_name,title FROM students JOIN marks on (students.student_id = marks.student_id) JOIN subjects on (marks.subject_id = subjects.subject_id) ";
    else
        sql = "SELECT first_name,last_name,title FROM students JOIN marks on (students.student_id = marks.student_id) JOIN subjects on (marks.subject_id = subjects.subject_id) WHERE students.student_id=" + request.query.id;

     
    connection.query(sql, function (err, result)
    {
        if (err)
            console.log(err);
        else
        {
            response.send(result)
        }    
    })  
}


function getImpartidas(request, response) {
    let sql;
    if (request.query.id == null)
        sql = "SELECT first_name,last_name,title FROM teachers JOIN subject_teacher on (teachers.teachers_id = subject_teacher.teacher_id) JOIN subjects on (subject_teacher.subject_id = subjects.subject_id)";
    else
        sql = "SELECT first_name,last_name,title FROM teachers JOIN subject_teacher on (teachers.teachers_id = subject_teacher.teacher_id) JOIN subjects on (subject_teacher.subject_id = subjects.subject_id) WHERE teachers.teachers_id="+ request.query.id;

     
    connection.query(sql, function (err, result)
    {
        if (err)
            console.log(err);
        else
        {
            response.send(result);
        }    
    })  
}


module.exports = {getMedia, getApuntadas, getImpartidas}