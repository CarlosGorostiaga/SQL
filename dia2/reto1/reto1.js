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

// **********************CALCULA MEDIA *********************

// let sql2 = "SELECT AVG (mark) FROM marks WHERE subject_id;";
// connection.query(sql2, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("MOSTRANDO DATOS");
//         console.log(result);
//     }
// });

// **********************NUMERO TOTAL DE ESTUDIANTES ********************

// let sql3 = "SELECT COUNT(*) FROM students;";
// connection.query(sql3, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("MOSTRANDO DATOS");
//         console.log(result);
//     }
// });


// **********************CAMPOS DE LA TABLA GROUPS****************

// let sql4 = "SELECT * FROM reto2.groups;";
// connection.query(sql4, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("MOSTRANDO DATOS");
//         console.log(result);
//     }
// });



// ********************************* ELIMINAR TODAS LA NOTAS POR ENCIMA DE 5 Y QUE SEAN DEL AÑO PASADO (SIN BETWEEN)


// let sql5 = "DELETE FROM marks WHERE mark >= 5 AND date < '2022-01-01'";
// connection.query(sql5, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Eliminados");
//         console.log(result);
//     }    
// });


// // OBTEN LOS DATOS DE LOS ESTUDIANTES QUE ESTEN ESTE AÑO EN EL BOOTCAMP. (AÑO DE INGRESO EN TABLA ESTUDIANTES)

// let sql6 = "SELECT * FROM students WHERE year_ingress = 2022";
// connection.query(sql6, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Actualizado");
//         console.log(result);
//     }    
// });


// // CALCULAR EL NUMERO DE PROFESORES POR ASIGNATURA

// let sql7 = "SELECT teacher_id, COUNT(*) AS teacherXSubject FROM subject_teacher GROUP BY subject_id";
// connection.query(sql7, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Actualizado");
//         console.log(result);
//     }    
// });





