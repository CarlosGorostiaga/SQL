// // ESTABLECEMOS CONEXION CON EL SERVIDOR
let mysql = require("mysql2");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Daganzo1996!",
    database: "reto2"
});

connection.connect(function (error) {
    if (error) {
        console.log(error);

    } else {
        console.log("Conexion correcta");
    }
})


// ********************OBTEN NOMBRES Y APELLIDOS DE LOS ALUMNOS Y LOS NOMBRES DE LAS ASIGNATURAS EN LAS QUE ESTAN APUNTADOS*************************

let sql = "SELECT first_name , last_name , title FROM students JOIN marks ON (students.student_id = marks.subject_id) JOIN subject ON (marks.subject_id=subject.subject_id)";
connection.query(sql, function (err, result) 
{
    if(err)
    console.log(err);
    else
    {
        console.log("Estos son los datos");
        console.log(result);
    }    
});




