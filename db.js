const { MongoClient } = require('mongodb');

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
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