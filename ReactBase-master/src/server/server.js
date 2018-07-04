const path = require("path")
const express = require("express")
const ServerMockup = require("./ServerMockup") // TODO cambiar por la llamada al servicio de laravel
const findLogic = require("./FindLogic")
const app = express()
const NodeGeocoder = require('node-geocoder');



var options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: 'AIzaSyBLDSPbOx2b4QKAgdY6qRa4LdBcg1tm-xs',
    formatter: null
}; 
var geocoder = NodeGeocoder(options);


const baseFolder = path.resolve(__dirname,'../../public')

app.use("/",express.static(baseFolder))

app.use(express.json())

app.get("/allRoutes",(req,resp)=>{
    ServerMockup()
        .then( busStopsData => resp.json(busStopsData) )
})





app.post("/route",(req,resp) => {
    const routeData = req.body

    geocoder.geocode(routeData["to"]["street"])
    .then(function(res) {
        routeData.to.lat = res[0]["latitude"];
        routeData.to.lng = res[0]["longitude"];
        geocoder.geocode(routeData["from"]["street"])
        .then(function(res) {
            routeData.from.lat = res[0]["latitude"];
            routeData.from.lng = res[0]["longitude"];
            ServerMockup()
                .then( busStopsData =>{
                    const route = findLogic.findRoute(busStopsData,routeData)
                    resp.json(route) 
                })
                .catch( (err) => {
                    console.error(err)
                    resp.json({error :err.message})
                } )
        })
    })
    
    
})

app.listen(8081,()=>{
    console.log("Server UP!")
})



function Geocodear(calle){
    geocoder.geocode(calle)
    .then(function(res) {
        console.log(res)
        return res[0];
    })
    .catch(function(err) {
        console.log(err);
    });
}
