
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://vittomedl:d9g2ZpBVtS4fYUR7@cluster0.khubqfx.mongodb.net/?retryWrites=true&w=majority`

// const uri = "mongodb+srv://adminuser:<password>@cluster0.pukzncm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err:any) => {
    if (err) {
        //   const collection = client.db("Ecom").collection("Users");
        //   console.log('collection: ', collection);
        // perform actions on the collection object
        client.close();
    };
});

export default client