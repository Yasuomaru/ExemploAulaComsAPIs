const axios = require('axios').default;
const app = document.querySelector('#app')

//pedir dados pela rota
// (fetch) - converter o stream de dados para json ou o que for necessario
//numa promise acdesso a informacao e fazem o que teem a fazer

fetch('https://randomuser.me/api/?results=50')
  .then(response => {
    return response.json()
  })
  .then(data => {
    const users = data.results

    // users.forEach(user => {
    //   const element = document.createElement('h1')

    //   element.textContent = `${user.name.first} ${user.name.last}`

    //   app.append(element)
    // });

    // console.log("ES Promises: ",data)
  })

axios.get('https://randomuser.me/api/?results=50')
  .then(response => console.log(response.data.results))

async function getAllUser(){
    const response = await fetch('https://randomuser.me/api/?results=50')
    const data = await response.json()

    // console.log("Async Await: ", data)
}

async function getAllUsersAxios(){
  const response = await axios.get('https://randomuser.me/api/?results=50')

  console.log(response.data.results)
}

getAllUser()
getAllUsersAxios()