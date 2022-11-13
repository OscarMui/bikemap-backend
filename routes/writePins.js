const sdk = require('node-appwrite');

exports = module.exports = function (req, res) {

    let method = req.method;
    
    let body = req.body;
    console.log(method, body)

    // Init SDK 
    const client = new sdk.Client();

    const databases = new sdk.Databases(client);

    client .setEndpoint(process.env.ENDPOINT_URL) // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.APPWRITE_API_KEY); // Your secret API key

    const promise = databases.createDocument(process.env.DATABASE_ID, process.env.COLLECTION_ID, 'unique()', {'User':body.user, 'Type': body.type, 'Longitude':body.lng, 'Latitude':body.lat, 'Title':body.title, 'Description':body.description, "Votes": [body.user]});
    
    promise.then(
        function (response) {
            res.json({res: "OK"})
        }, function (error) {
            console.log(error)
            res.json(error)
        }
    );
}
