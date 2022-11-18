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

// *******************PONER NOTAS A 0 ***********************

// let sql1 = "UPDATE marks SET mark = 0 ";
// connection.query(sql1, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log(" Dato Actualizado ");
//         console.log(result);
//     }
// });

// **********************INFO DE ESTUIANTES******************

let sql2 = "SELECT first_name , last_name FROM students";
connection.query(sql2, function (err, result) {
    if (err)
        console.log(err);
    else {
        console.log("MOSTRANDO DATOS");
        console.log(result);
    }
}); 

// ***********************INFO TEACHERS********************

// let sql3 = "SELECT * FROM teachers "; 
// connection.query(sql3, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("MOSTRANDO DATOS");
//         console.log(result);
//     }
// }); 

