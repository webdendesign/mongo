const {MongoClient} = require("mongodb");

const client = new MongoClient("mongodb+srv://denis:denis@cluster0.cwuc8.mongodb.net/cloud?retryWrites=true&w=majority");

const start = async () => {
    try {
        await client.connect();
        console.log("Соединение установлено");
        await client.db().createCollection("users");
        const users = client.db().collection("users");
        await users.insertOne({name: "denis", age: 33});
        const user = await users.findOne({name: "denis"});
        console.log(user);
    } catch (e) {
        console.log(e);
    }
}

start();