module.exports = {
    development: {
        connection_string: 'mongodb://localhost:27017/test',
        params: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    },
    mongo_atlas: {
        connection_string: 'mongodb+srv://admin:admin@test.oamsg.gcp.mongodb.net/?authSource=admin&readPreference=primary',
        params: {
            user: "admin",
            pass: "admin",
            dbName: "sample_airbnb",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    }
}