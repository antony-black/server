// GET

// axios.get('http://localhost:3002/posts')
// .then(res => console.log(res))
// .catch(err => console.error(err))


// async function getAxios() {
//   try {
//     const res = await axios.get('http://localhost:3002/posts')
//     console.log(res.data)
//   }
//   catch(err) {
//     console.error(err)
//   }
// }
// getAxios();


// POST

// axios.post('http://localhost:3002/posts', {
//   title: "HELLO AXIOS!"
// })
// .then(res => console.log(res.data))
// .catch(err => console.error(err))

// async function postAxios() {
//   try {
//     const res = await axios.post('http://localhost:3002/posts', {
//       title: 'Hello'
//     })
//     console.log(res)
//   }
//   catch(err) {
//     console.error(err)
//   }
// }
// postAxios();

// PUT

// axios.put('http://localhost:3002/posts/1', {
//   title: 'Hello'
// })
// .then(res => console.log(res))
// .catch(err => console.error(err))

// async function putAxios() {
//   try {
//     const res = await axios.put('http://localhost:3002/posts/1', {
//     title: 'Hello'
//   })
//   console.log(res)
//   }
//   catch(err) {
//     console.error(err)
//   } 
// }
// putAxios();

// DELETE

// axios.delete('http://localhost:3002/posts/1')
// .then(res => console.log(res))
// .catch(err => console.error(err))

// async function deleteAxios() {
//   try {
//     const res = await axios.delete('http://localhost:3002/posts/1')
//     console.log(res);
//   }
//   catch(err) {
//     console.error(err)
//   }
// }
// deleteAxios()