import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // Dalam development mode, gunakan global variable supaya tidak buat koneksi baru setiap restart
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Dalam production mode, buat client baru
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
