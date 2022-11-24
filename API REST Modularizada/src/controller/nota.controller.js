const connection = require("../database")



function getNotas(request, response) {
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM marks";
    else
        sql = "SELECT student_id, subject_id, date, mark FROM marks WHERE student_id=" + request.query.id;

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
};


function postNota(request, response) {
    console.log(request.body);
    let sql = "INSERT INTO marks (student_id, subject_id , date, mark)" +
        " VALUES ('" + request.body.student_id + "', '" +
        request.body.subject_id + "' , '" +
        request.body.date + "' , '" +
        request.body.mark + "')";

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

function putNota(request, response) {
    console.log(request.body);
    let params = [request.body.student_id,
    request.body.subject_id,
    request.body.date,
    request.body.mark,
    request.body.mark_id]

    let sql = "UPDATE marks SET student_id = COALESCE(?, student_id) , " +
        "subject_id = COALESCE(?, subject_id) , " +
        "date = COALESCE(?, date) , " +
        "mark = COALESCE(?, mark)  WHERE mark_id = ?";
    // console.log(sql); 
    connection.query(sql, params, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
}



function deleteNota(request, response) {
    console.log(request.body);
    let sql = "DELETE FROM marks WHERE mark_id = '" + request.body.mark_id + "'";
    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
}


module.exports = { postNota, getNotas, putNota, deleteNota }