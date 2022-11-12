const sdk = require('node-appwrite');

exports = module.exports = function (req, res) {

    // Init SDK
    const client = new sdk.Client();

    const databases = new sdk.Databases(client);

    client .setEndpoint('https://localhost/v1') // Your API Endpoint
    .setProject('636f8b7f58411246fbf8') // Your project ID
    .setKey('a38ff9d39120663c24a6e80f9bbac3d2fda58fa4776d6d3aa837e20e728431b9411338e272dca4c4d21ad6f9c98ff97f48c2f66de865ff74aa6ee398c34dabc31b4a7161d690c8f2d128dabe9f47aab7bcfde071d7e11771a90b8c76de6a6f505e8ce7cdecf674acf4554f78e1860620979004c8204aa551fd0a3e3c4a390e58'); // Your secret API key


    const promise = databases.listDocuments('636f8ba30acc91d1c45f', '636f8be705efa1e3529f');

    console.log("HERE")
    promise.then(function (response) {console.log(response); res.json(response)}, function (error) {console.log(error); res.json(error)});
}