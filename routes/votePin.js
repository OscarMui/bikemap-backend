const sdk = require('node-appwrite');

exports = module.exports = function (req, res) {

    let method = req.method;
    
    let {id, deviceId} = req.body;
    console.log(method, id, deviceId)


    // Init SDK 
    const client = new sdk.Client();

    const databases = new sdk.Databases(client);

    client .setEndpoint(process.env.ENDPOINT_URL) // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.APPWRITE_API_KEY); // Your secret API key

    const read = databases.getDocument(process.env.DATABASE_ID, process.env.COLLECTION_ID, id);

    read.then(
        function(res){
            let newdoc = {...res};
            newdoc = {
                type: res.Type,
                lng: res.Longitude,
                lat: res.Latitude,
                user: res.User,
                title: res.Title,
                description: res.Description,
                timeUntil: res.timeUntil,
                voteNum: res.votes.length,
                id: res["$id"]
            };
            if(res.Votes.includes(deviceId)){
                console.log("vote exists")
                res.json({
                    status: "vote_exists",
                    document: newdoc,
                })
            }else{
                let update = databases.updateDocument(process.env.DATABASE_ID, process.env.COLLECTION_ID, id, {
                    Votes: [...res.Votes,deviceId]
                })

                update.then(
                    function (res) {
                        res.json({
                            status: "vote_accepted",
                            document: {
                                ...newdoc,
                                voteNum: newdoc.vote+1,
                            }
                        })
                    }, function (error) {
                        console.log(error)
                        res.json(error)
                    }
                )
            }
        }, function(err){
            console.log(error)
            res.json(error)
        }
    )
}
