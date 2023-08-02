const { MongoClient } = require('mongodb');

let dbConnection
let uri = 'mongodb+srv://testuser:test1234@nodetuts.0jtry2m.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}



//    connectToDb: connect to database
//    getDb: return database connecting so that we can start communicating with it, like read data write data, delete, post etc.
