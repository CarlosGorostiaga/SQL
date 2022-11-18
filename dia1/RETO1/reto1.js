let mysql = require("mysql2");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Daganzo1996!",
    database: "codenotch"
});

connection.connect(function (error) {
    if (error) {
        console.log(error);

    } else {
        console.log("Conexion correcta");
    }
})


// // HACER INSERT

// let sql = "INSERT INTO students (first_name, last_name) VALUES ('carlos', 'gorostiaga')";
// connection.query(sql, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Alumno Insertado");
//         console.log(result);
//     }    
// });



// // // CREAR COLUMNA

// let sql1= "ALTER TABLE students ADD newColumn VARCHAR(40)"
// connection.query(sql1, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Columna Insertada");
//         console.log(result);
//     }    
// });


// // // BORRAR COLUMNA

// let sql2 = "ALTER TABLE students DROP COLUMN newColumn";
// connection.query(sql2, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Columna Eliminada");
//         console.log(result);
//     }    
// });

// // ELIMINAR TABLA

// let sql4 = "DROP TABLE subject";
// connection.query(sql4, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Tabla Eliminada");
//         console.log(result);
//     }    
// });



// // // UPDATE

// let sql3 = "UPDATE students SET last_name = 'gavilan'";
// connection.query(sql3, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Actualizado");
//         console.log(result);
//     }    
// });