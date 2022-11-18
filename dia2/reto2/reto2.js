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



// // OBTEN EL ID Y LA NOTA DE LOS ALUMNOS QUE TENGAN UN ID ENTRE 1 Y 20, O QUE SU NOTA SEA MAS DE 8 Y TENGA FECHA DEL AÑO PASADO

// let sql = "SELECT mark , student_id FROM marks WHERE student_id BETWEEN 1 AND 20 OR (mark > 8 AND date BETWEEN '2021-01-01' AND '2021-12-31')";
// connection.query(sql, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Mostrando Resultados");
//         console.log(result);
//     }    
// });


// // OBTEN LA MEDIA DE LAS NOTAS QUE SE HAN DADO EL ULTIMO AÑO POR ASIGNATURA

// let sql1 = "SELECT AVG (mark) FROM marks WHERE date BETWEEN '2022-01-01' AND '2022-12-31' GROUP BY  subject_id";
// connection.query(sql1, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Actualizado");
//         console.log(result);
//     }    
// });


// // OBTEN LA MEDIA DE LAS NOTAS QUE SE HAN DADO EN EL ULTIMO AÑO POR ALUMNO


let sql2 = "SELECT AVG (mark) FROM marks WHERE date BETWEEN '2022-01-01' AND '2022-12-31' GROUP BY  student_id";
connection.query(sql2, function (err, result) 
{
    if(err)
    console.log(err);
    else
    {
        console.log("Actualizado");
        console.log(result);
    }    
});