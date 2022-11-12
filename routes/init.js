const sdk = require('node-appwrite');

const MarkerTypes = ['Warning', 'Information', 'Bike Rack'];

const data = [
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.251078,
        Latitude: 51.752359,
        Title: "Logic Lane",
        Description: "Bike Rack",
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.250421,
        Latitude: 51.752739,
        Title: "Queen's Lane",
        Description: "Bike Rack",
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.253825,
        Latitude: 51.754074,
        Title: "Catte Street",
        Description: "Bike Rack",
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.254594,
        Latitude: 51.755190,
        Title: "Parks Road",
        Description: "Bike Rack",
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.258051,
        Latitude: 51.759707,
        Title: "Keble Road",
        Description: "Bike Rack",
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.259821,
        Latitude: 51.759342,
        Title: "Keble Road",
        Description: "Bike Rack",
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.258620,
        Latitude: 51.754345,
        Title: "Magdalen Street East",
        Description: "Bike Rack",
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.257598,
        Latitude: 51.753732,
        Title: "Ship Street",
        Description: "Bike Rack",
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.248388,
        Latitude: 51.754031,
        Title: "Longwall Street",
        Description: "Bike Rack",
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.249688,
        Latitude: 51.755443,
        Title: "Jowett Walk",
        Description: "Bike Rack",
    },
    {
        User: "admin",
        Type: "Warning",
        Longitude: -1.244197,
        Latitude: 51.750088,
        Title: "The Plain Roundabout",
        Description: "Accident Hotspot<br />"+
            "Used by 12,000 bike riders each day, the council says that the roundabout is the busiest in Oxfordshire in terms of flow of cyclists, and one of the most used in the country.<br />"+
            "It is located where three key routes from south and east Oxford, where most of the city's population lives, meet with those roads - St Clement's Street, Cowley Road and Iffley Road - then funnelled towards Magdalen Bridge and the city centre.<br />"+
            "A number of the city\'s bus services pass through the roundabout, as do coach services to and from London and other destinations."
        ,
    },
    {
        User: "admin",
        Type: "Information",
        Longitude: -1.238187,
        Latitude: 51.748079,
        Title: "Cycle King",
        Description: "Bike Shop<br />"+
            "<a href='https://goo.gl/maps/Q7qy3kVEPTgFRvEH7'>View on Google Maps</a>"
        ,
    },
    {
        User: "admin",
        Type: "Information",
        Longitude: -1.2639212608337402,
        Latitude: 51.77552117421955,
        Title: "Summertown Cycles",
        Description: "Bike Shop<br />"+
            "<a href='https://goo.gl/maps/zPqzAcZLmcKk9pVQ8'>View on Google Maps</a>"
        ,
    },
];
exports = module.exports = function (req, res) {
    // Init SDK 
    const client = new sdk.Client();

    const databases = new sdk.Databases(client);

    client .setEndpoint(process.env.ENDPOINT_URL) // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.APPWRITE_API_KEY); // Your secret API key
    
    const promises = data.map(datum => {return databases.createDocument(process.env.DATABASE_ID, process.env.COLLECTION_ID, 'unique()', datum)})

    Promise.all(promises).then(
        function (response) {
            res.json({res: "OK"})
        }, function (error) {
            console.log(error)
            res.json(error)
        }
    );
}
