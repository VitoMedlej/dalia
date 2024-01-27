const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://vittomedl:d9g2ZpBVtS4fYUR7@cluster0.khubqfx.mongodb.net/?retryWrites=true&w=majority`;

async function withMongoClient(callback : any) : Promise < any > {
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });

    try {
        await client.connect();

        if (client.topology.isConnected()) {
            console.log('MongoDB client is connected');
            return await callback(client); // Here's the fix
        } else {
            throw new Error('Failed to connect to MongoDB');
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        if (client.topology.isConnected()) {
            console.log('Closing MongoDB client');
            await client.close();
            console.log('MongoDB client is closed');
        }
    }
}

export default withMongoClient;
