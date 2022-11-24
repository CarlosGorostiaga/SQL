const connection = require("../database")



function getAlumnos(request, response) {
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM students";
    else
        sql = "SELECT * FROM students WHERE student_id=" + request.query.id;

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
};



function postAlumno(request, response) {
    console.log(request.body);
    let sql = "INSERT INTO students (first_name, last_name , group_id, year_ingress)" +
        " VALUES ('" + request.body.first_name + "', '" +
        request.body.last_name + "' , '" +
        request.body.group_id + "' , '" +
        request.body.year_ingress + "')";

    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId));
            else {
                response.send("-1");
            }
        }
    })
}



function putAlumno(request, response) {
    console.log(request.body);
    let params = [request.body.first_name,
    request.body.last_name,
    request.body.group_id,
    request.body.year_ingress,
    request.body.student_id]

    let sql = "UPDATE students SET first_name = COALESCE(?, first_name) , " +
        "last_name = COALESCE(?, last_name) , " +
        "group_id = COALESCE(?, group_id) , " +
        "year_ingress = COALESCE(?, year_ingress)  WHERE student_id = ?";
    console.log(sql);
    connection.query(sql, params, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
}


function deleteAlumno(request, response) {
    console.log(request.body);
    let sql = "DELETE FROM students WHERE student_id = '" + request.body.student_id + "'";
    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
}


module.exports = { getAlumnos, postAlumno, putAlumno, deleteAlumno };