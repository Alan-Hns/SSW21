//const MongoClient = require('mongodb').MongoClient;
import { MongoClient } from 'mongodb'; //hace lo mismo que la de arriba

let db = null;
let client = null;

export const getDb = () => {
    if (db){
        return db;
    }
    if (!client) {
        client = await MongoClient.connect(process.env.MONGOURI , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    db = client.db();
    return db;
}

export default getDb;