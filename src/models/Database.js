let mongoose = require('mongoose');
let dbconfig = require('../src/config/database.config');

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        var conn = process.env.DBSTORE == "ATLAS" ? dbconfig.mongo_atlas : dbconfig.development;
        mongoose.connect(conn.connection_string, {
                user: conn.params.user,
                pass: conn.params.pass,
                dbName: conn.params.dbName,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            })
            .then(() => {
                console.log('Database connection successful.')
            })
            .catch(err => {
                console.error('Database connection error: ' + err.toString())
            });
        //mongoose.setDebugLevel(1);
    };


}

module.exports = new Database()