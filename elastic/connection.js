const { Client } = require('@elastic/elasticsearch')

// const client = new Client({
//   node: 'http://localhost:9200',
// })
var client = new Client({
  cloud: {
    id: 'first:YXNpYS1zb3V0aDEuZ2NwLmVsYXN0aWMtY2xvdWQuY29tJDEwNWYxMzU0ZTU4NTRjOGY5NmNjOWZhMzk1NTA0MWQ2JDBhYzMxZGNhODhjNTRiNjRiZjkwM2NhZmMzOWZjYWE3',
  },
  auth: {
    username: 'elastic',
    password: 'gJNX4ZYdqW0hqYjqz8oFXmLr',
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
