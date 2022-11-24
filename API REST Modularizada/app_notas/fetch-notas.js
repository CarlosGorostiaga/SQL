class Nota {
    
    constructor(student_id, subject_id, date ,mark){
        this.student_id = student_id;
        this.subject_id = subject_id;
        this.date = date;
        this.mark = mark;
        
    }
}    


// FUNCION VALIDAR PARA QUE LOS PROFESIONALES SE CREEN CON TODOS LOS CAMPOS


function validar(nota)
{
    resultado = false
    if (nota.student_id == "" || nota.student_id == "null")
    {
        showToast("AVISO: Campo ID de estudiante no informado", "bg-warning")
    }
    else if (nota.subject_id == "" || nota.subject_id == "null")
    {
        ("AVISO: Campo ID asignatura no informado", "bg-warning")
    }
    else if (nota.date == "" || nota.date == "null")
    {
        showToast("AVISO: Campo fecha no informado", "bg-warning")
    }
    else if (nota.mark == "" || nota.mark == "null")
    {
        showToast("AVISO: Campo nota no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

// // FUNCION PARA MOSTRAR EL TOAST (UNA ESPECIE DE ALERT)

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}



function postNota()
{
    let nota = new Nota(document.getElementById("student_id").value,
                        document.getElementById("subject_id").value,
                        document.getElementById("date").value,
                        document.getElementById("mark").value,)
    
    const url = "http://localhost:3000/notas";

    if (validar(nota))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(nota),
                method: "POST"
            }

        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            if (result.error)
                showToast("ERROR: " +  result.mensaje, "bg-danger")
            else
                showToast("nota Creada Correctamente", "bg-success")

            console.log(result)
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }
}



function getNotas()
{

    let lista = document.getElementById("notas");  
    lista.innerHTML=""
    let id = document.getElementById("student_id").value;
    
    // console.log(id);
    if(id){

        let url = "http://localhost:3000/notas?id="+id;

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }
    // console.log(url);
    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {      
        if (!result.error)
        {      
            //   console.log(id + 'en fech');
            //   console.log(data);
        // console.log(solicitud);   
        
        result.forEach(function (nota) {
            lista.innerHTML += `<p>ID de estudiante: ${nota.student_id} <br>  
                            ID asignatura: ${nota.subject_id}<br>
                            Fecha: ${nota.date}<br>
                            Nota: ${nota.mark}<br>
                            </p>`
        })                           
        
                                                        
        }
        else
            showToast("ERROR: " +  data.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    } else {
        let url = "http://localhost:3000/notas";

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }

    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {      
        if (!result.error)
        {        

    result.forEach(function (nota) {               
        // console.log(solicitud);                                
        lista.innerHTML += `<p>ID estudiante: ${nota.student_id} <br>  
                            ID asignatura: ${nota.subject_id}<br>
                            Fecha: ${nota.date}<br>
                            Nota: ${nota.mark}<br>
                            </p>`
    })                                                       
        }
        else
            showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    }

    
}


function putNota() {
    let newIdStudient = document.getElementById("student_id").value;
    let newIdSubject = document.getElementById("subject_id").value;
    let newDate = document.getElementById("date").value;  
    let newMark = document.getElementById("mark").value;
    let id = document.getElementById("mark_id").value;

    if(newIdStudient == ''){
        newIdStudient = null;
    }
    if(newIdSubject == ''){
        newIdSubject = null;
    }
    if(newDate == ''){
        newDate= null;
    }
    if(newMark == ''){
        newMark = null;
    }

    let put ={
        student_id: newIdStudient, 
        subject_id: newIdSubject, 
        date: newDate, 
        mark: newMark,
        mark_id: id

    }
    console.log(put);
    
    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
        method: "PUT",
        body:JSON.stringify(put)
        
    };

 
    let url = "http://localhost:3000/notas"
    
    if (id != "") {
        fetch(url, param)
        .then((data) => {
        return data.json();
        })
        .then((data) => {
          console.log(data.resultado);
          showToast("Profesional Modificado Correctamente", "bg-success")
        })
        .catch((error) => {
          console.log(error);
          showToast("ERROR: " +  error.mensaje, "bg-danger")
        })
    
    } else {
        showToast("Rellena el campo Id", "bg-danger");
    }
}



function deleteNota() {
    let id = document.getElementById("mark_id").value;
    // console.log(id);
  
    let param = {headers: {"Content-type": "application/json; charset= UTF-8"},
      method: "DELETE",
      body: JSON.stringify({mark_id: id})
    };
  
    const url = "http://localhost:3000/notas";
  
    if (id != "") {
        fetch(url,param)
        .then((data) =>{
        return data.json()
        })
        .then((data) => {
        // console.log(data);
        showToast("nota eliminada", "bg-success")
        })
        .catch((error) => {
        console.log(error);
        })
    } else {
        showToast("Rellena el campo id", "bg-danger");
    }
}