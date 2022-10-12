const request = require('request')

const url = "https://rickandmortyapi.com/api/character"

let r = request(url, {json: true}, function(error , response , body){
    const tipos = response.body.results
    console.log(tipos)
    
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('-------')        
     });
})