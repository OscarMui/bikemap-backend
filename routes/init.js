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
        Votes: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.250421,
        Latitude: 51.752739,
        Title: "Queen's Lane",
        Description: "Bike Rack",
        Votes: ['4','5','6','7','8','9','10'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.253825,
        Latitude: 51.754074,
        Title: "Catte Street",
        Description: "Bike Rack",
        Votes: ['8','9','10','11','12'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.254594,
        Latitude: 51.755190,
        Title: "Parks Road",
        Description: "Bike Rack",
        Votes: ['1','2','3','4','5','6','7','8','9','10'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.258051,
        Latitude: 51.759707,
        Title: "Keble Road",
        Description: "Bike Rack",
        Votes: ['13','20','3','4','5','1','2','8','9','10'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.259821,
        Latitude: 51.759342,
        Title: "Keble Road",
        Description: "Bike Rack",
        Votes: ['10','11','12','13','14','15','16','17','18','19','20'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.258620,
        Latitude: 51.754345,
        Title: "Magdalen Street East",
        Description: "Bike Rack",
        Votes: ['1','3','5','7','9','11','13','15','17','19'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.257598,
        Latitude: 51.753732,
        Title: "Ship Street",
        Description: "Bike Rack",
        Votes: ['2','4','6','8','10','12','14','16','18','20'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.248388,
        Latitude: 51.754031,
        Title: "Longwall Street",
        Description: "Bike Rack",
        Votes: ['2','3','5','7','9','11','13','17','6'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.249688,
        Latitude: 51.755443,
        Title: "Jowett Walk",
        Description: "Bike Rack",
        Votes: ['2','3','6','1'],
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
        Votes: ['1','2','8','3','7','11','12','5'],
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
        Votes: ['7','1','2','5','3','17','10','11'],
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
        Votes: ['2','5','3','12','8','13','7','1'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.2627974152565002,
        Latitude: 51.760622137160475,
        Title: "The Mathematical Institute",
        Description: "Bike Rack",
        Votes: ['7','1','12','5','3','17','10','11','2','4','6','8'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.248349535611637,
        Latitude: 51.75317064274,
        Title: "Magdalen College Back Gate",
        Description: "Bike Rack",
        Votes: ['1','14','16','17','12','2','10','20','13','3'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.2445921987382835,
        Latitude: 51.750444228243026,
        Title: "Sainsbury's",
        Description: "Bike Rack",
        Votes: ['13','7','1','20','5','3','17','10','11'],
    },
    {
        User: "admin",
        Type: "Warning",
        Longitude: -1.2565600504911378,
        Latitude: 51.758164504872,
        Title: "Park's Road",
        Description: "Park's Road pedestrian path closed in this section.",
        Votes: ['1','2','4','6','7','10','11','12','14','20'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.2537999060825666,
        Latitude: 51.753452598467085,
        Title: "Radcliffe Camera",
        Description: "Bike Rack",
        Votes: ['1','3','5','6','7','8','10','12','14','16','19'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.2546493791714775,
        Latitude: 51.75511335057417,
        Title: "Parks Road",
        Description: "Bike Rack",
        Votes: ['2','4','5','7','8','10','11','12','18','20'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.258795749959214,
        Latitude: 51.7540975349175,
        Title: "Broad Street",
        Description: "Bike Rack",
        Votes: ['1','5','15','10','20','11','13','17','18'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.258444435193835,
        Latitude: 51.754275777254946,
        Title: "Magdalen Street",
        Description: "Bike Rack",
        Votes: ['2','3','6','8','9','12','15','18'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.2574801810529812,
        Latitude: 51.75431396602882,
        Title: "Broad Street",
        Description: "Bike Rack",
        Votes: ['2','4','8','16','1','3','9','5','20'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.2565266913845607,
        Latitude: 51.75428328121007,
        Title: "Blackwell's Art & Poster Shop",
        Description: "Bike Rack",
        Votes: ['3','4','6','7','8','19','18', '17', '20', '12'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.255647372260107,
        Latitude: 51.75454580547427,
        Title: "Blackwell's Bookshop",
        Description: "Bike Rack",
        Votes: ['2','3','4','5','6','7','8','9','10','11','12','13','15','16'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.2562273837517823,
        Latitude: 51.757754524080866,
        Title: "Parks Road S Parks Road Intersection",
        Description: "Bike Rack",
        Votes: ['5','1','2','3','4','8', '10', '16', '17','19','20','13'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.2523488945508787,
        Latitude: 51.75881735798493,
        Title: "S Parks Road",
        Description: "Bike Rack",
        Votes: ['2','3','6','1'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.2539157895301245,
        Latitude: 51.75831918604838,
        Title: "S Parks Road",
        Description: "Bike Rack",
        Votes: ['8','3','7','1','2','5','13','17'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.248635670126319,
        Latitude: 51.75689387242146,
        Title: "St Cross Road",
        Description: "Bike Rack",
        Votes: ['12','13','16','11','2','8','3','17','1'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.257245026544116,
        Latitude: 51.75968073924905,
        Title: "University Parks",
        Description: "Bike Rack",
        Votes: ['13','7','1','2','5','3','17','10','11'],
    },
    {
        User: "admin",
        Type: "Bike Rack",
        Longitude: -1.2577425382850205,
        Latitude: 51.75193096107787,
        Title: "Queen Street",
        Description: "Bike Rack",
        Votes: ['2','3','5','7','11', '13','17','19'],
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
