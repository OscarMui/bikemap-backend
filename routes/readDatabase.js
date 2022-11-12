const sdk = require('node-appwrite');

exports = module.exports = function (req, res) {

    // Init SDK
    const client = new sdk.Client();

    const databases = new sdk.Databases(client);

    client .setEndpoint(process.env.ENDPOINT_URL) // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.APPWRITE_API_KEY); // Your secret API key


    const promise = databases.listDocuments(process.env.DATABASE_ID, process.env.COLLECTION_ID);

    console.log("HERE")
    promise.then(function (response) {console.log(response); res.json(response)}, function (error) {console.log(error); res.json(error)});
}