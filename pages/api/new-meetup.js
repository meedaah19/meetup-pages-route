import { MongoClient } from "mongodb";

async function handler(req, res) {
    if ( req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://meedaah19:Y89,!Yj&ZecD^2+@cluster0.jvvyu.mongodb.net/?retryWrites=true&w=majority&appName=meetups');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

       const result = await meetupsCollection.insertOne(data);

       client.close();

       res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;