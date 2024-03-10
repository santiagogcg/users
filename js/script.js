

const containerElDOM = document.getElementById('listaUsuarios')

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((usersDB) => {
    const users = usersDB.map((user) => ({
      name: user.name,
      username: user.username,
      img: `./assets/img/${user.id}.jpeg`,
      phone: user.phone,
      email: user.email,
      company: user.company.name,
      address: {
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
      },
      age: Math.floor(Math.random() * 40) + 18,
    }))

    console.log(users)

    users.forEach((user) => {
      const li = document.createElement('li')
      li.className = 'user-card'

      const div = document.createElement('div')
      div.className = 'user-info'

      const ulInfo = document.createElement('ul')

      const userInfo = [
        { label: 'Nombre:', value: user.name },
        { label: 'Edad:', value: user.age },
        { label: 'Username:', value: user.username },
        { label: 'Teléfono:', value: user.phone },
        { label: 'Email:', value: user.email },
      ]

      userInfo.forEach((info) => {
        const li = document.createElement('li')
        const b = document.createElement('b')
        b.textContent = info.label

        li.append(b, info.value)

        ulInfo.appendChild(li)
      })

      const img = document.createElement('img')
      img.src = user.img
      img.alt = `photo ${user.name}`

      const ulDetails = document.createElement('ul')

      const { street, suite, city } = user.address

      const userDetails = [
        { label: 'Compañía:', value: user.company },
        {
          label: 'Dirección:',
          value: `${street}, ${suite}, ${city}`,
        },
      ]

      userDetails.forEach((detail) => {
        const li = document.createElement('li')
        const b = document.createElement('b')
        b.textContent = detail.label

        li.append(b, detail.value)

        ulDetails.appendChild(li)
      })

      div.append(ulInfo, img)
      li.append(div, ulDetails)

      containerElDOM.appendChild(li)
    })
  })