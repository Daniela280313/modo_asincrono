const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
const url = "https://rickandmortyapi.com/api/character"


//funcion para conectar a una api en modo asicrono
 const get_data = (endpoint)=>{
    //definir la promesa:
    let promise = new Promise((resolve , rejected)=>{
    //1. crear el objeto xmlhttp
    const h = new xmlHttpRequest();
    //2. establecer una conexion a una api
    h.open('Get' , endpoint)
    //3. enviar la request a server(API)
    h.send()
    //4. tratar los datos de la response
    h.onload = ()=>{
    if(h.status === 200 ){
         resolve(h.responseText)
    }else{
       rejected(h.status)
    }

}
    })
    return promise 

}
//FUNCION CALLBACK: exito
const exito = (response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach(element => {
       console.log(`Tipo: ${element.name}`)
       console.log('-------')        
    });
}

//funcion callback: fallo
const fallo = (status)=>{
    console.log(status)
}


//invocar la funcion
get_data(url).then((data)=>{
 exito(data)
})