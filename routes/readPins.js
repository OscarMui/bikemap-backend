const sdk = require('node-appwrite');

exports = module.exports = function (req, res) {

    // Init SDK
    const client = new sdk.Client();

    const databases = new sdk.Databases(client);

    client .setEndpoint(process.env.ENDPOINT_URL) // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.APPWRITE_API_KEY); // Your secret API key


    const promise = databases.listDocuments(process.env.DATABASE_ID, process.env.COLLECTION_ID);

    promise.then(function (response) {
        let newres = {...response};
        newres.documents = newres.documents.map((doc)=>{ return {
            lng: doc.Longitude,
            lat: doc.Latitude,
            user: doc.User,
            title: doc.Title,
            description: doc.Description,
            timeUntil: doc.timeUntil,
        }});
        res.json(newres)
    }, function (error) {
        console.log(error);
        res.json(error)
    });
}
