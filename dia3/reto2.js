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



// ***************************OBTEN LOS NOMBRES Y APELLIDOS DE LOS PROFESORES Y LOS NOMBRES DE LAS ASIGNATURAS QUE IMPARTEN*********************************


let sql = "SELECT first_name, last_name , title FROM teachers JOIN subject_teacher ON (teachers.teachers_id = subject_teacher.subject_id) JOIN subject ON (subject_teacher.subject_id = subject.subject_id)";
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




