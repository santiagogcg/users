

const container=document.getElementById('listaUsuarios')

const edad=Math.floor(Math.random()*70)



fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res=>{
    return res.json()
})
    .then((data) => {
        
        renderPersons(data)
        
    })
    .catch((err) => {
        alert('Error al obtener recursos del servidor')
    })





    function renderPersons(person){
        container.innerHTML = ''
    
        person.forEach((pers,index) => {
            
          container.innerHTML += `
          <article >
            <img id=${index+1} src='assets/img/${index+1}.jpeg' alt=${pers.name} />
            <ul class="person__details">
              <li >
                <p><b>Name:</b> ${pers.name}</p>
              </li>
              <li >
                <p><b>Phone:</b> ${pers.phone}</p>
              </li>
              <li >
              <p><b>email:</b> ${pers.email}</p>
              </li>
              <li >
              <p><b>company:</b> ${pers.company.name}</p>
              </li>
              <li >
              <p><b>username:</b> ${pers.username}</p>
              </li>
              <li >
              <p><b>age:</b> ${edad}</p>
              </li>
            </ul>

          </article>
        `
        })
    }