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


/*
Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y
apellidos del profesor que la imparte.
NOTA: Para que no aparezcan notas repetidas solo debe haber un profesor por asignatura y un grupo
por asignatura y profesor. Todos los retos hay que hacerlos en Workbench y en Node.js con sentencias
preparadas.
*/
let sql1 = `SELECT COUNT(student_id),  title,  teachers.first_name, teachers.last_name FROM students
JOIN grupos ON (students.group_id = grupos.group_id)
JOIN subject_teacher ON (grupos.group_id = subject_teacher.group_id)
JOIN teachers  ON (subject_teacher.teacher_id = teachers.teachers_id)
JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)
GROUP BY subjects.title)`;
connection.query(sql1, function (err, result) {
    if (err)
        console.log(err);
    else {
        console.log("Estos son los datos");
        console.log(result);
    }
});

