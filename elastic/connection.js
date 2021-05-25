const { Client } = require('@elastic/elasticsearch')

// const client = new Client({
//   node: 'http://localhost:9200',
// })
var client = new Client({
  cloud: {
    id: `${process.env.cloudID}`,
  },
  auth: {
    username: 'elastic',
    password: `${process.env.password}`,
  },
})

module.exports = client
// try {
//   client.ping(
//     {
//       // ping usually has a 3000ms timeout
//       requestTimeout: 1000,
//     },
//     function (error) {
//       console.log(error)
//     }
//   )
// } catch (err) {
//   console.log(err)
// }
