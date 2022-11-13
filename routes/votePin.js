const sdk = require('node-appwrite');

exports = module.exports = function (req, res) {

    let method = req.method;
    
    console.log(req.query)
    let {id, deviceId} = req.query;
    console.log(method, id, deviceId)


    // Init SDK 
    const client = new sdk.Client();

    const databases = new sdk.Databases(client);

    client .setEndpoint(process.env.ENDPOINT_URL) // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.APPWRITE_API_KEY); // Your secret API key

    const read = databases.getDocument(process.env.DATABASE_ID, process.env.COLLECTION_ID, id);

    read.then(
        function(response){
            let newdoc = {...response};
            newdoc = {
                type: response.Type,
                lng: response.Longitude,
                lat: response.Latitude,
                user: response.User,
                title: response.Title,
                description: response.Description,
                timeUntil: response.timeUntil,
                voteNum: response.Votes?.length || 0,
                id: response["$id"]
            };
            if(response.Votes?.includes(deviceId)){
                console.log("vote exists")
                res.json({
                    status: "vote_exists",
                    document: newdoc,
                })
            }else{
                let update = databases.updateDocument(process.env.DATABASE_ID, process.env.COLLECTION_ID, id, {
                    Votes: [...(response.Votes||[]),deviceId]
                })

                update.then(
                    function (response) {
                        res.json({
                            status: "vote_accepted",
                            document: {
                                ...newdoc,
                                voteNum: newdoc.voteNum+1,
                            }
                        })
                    }, function (error) {
                        console.log(error)
                        res.json(error)
                    }
                )
            }
        }, function(err){
            console.log(err)
            res.json(err)
        }
    )
}
