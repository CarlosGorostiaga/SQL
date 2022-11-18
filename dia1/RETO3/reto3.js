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
});


// let sql2 = "SELECT first_name , last_name FROM students";
// connection.query(sql2, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("MOSTRANDO DATOS");
//         console.log(result);
//     }
// });


// ELIMINAR TODAS LAS NOTAS CON MAS DE 10 AÑOS

// let sql1 = "DELETE FROM marks WHERE date < 2012-9-9";
// connection.query(sql1, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("Datos Borrados");
//         console.log(result);
//     }
// });

// let sql2 = "UPDATE marks SET mark = 5 WHERE mark < 5  "
// connection.query(sql2, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("Datos Actualizados");
//         console.log(result);
//     }
// });
