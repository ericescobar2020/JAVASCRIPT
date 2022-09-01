//  installar axios para realizar llamadas a servicios externos 
const axios = require('axios').default;

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    console.log("SEccess!!")
    // handle success
    console.log(response.data); //  data sirve para ver los datos de la libreria. 
  })
  .catch(function (error) {
    // handle error
    console.log("ERROR!!!")
    console.log(error);
  })
  