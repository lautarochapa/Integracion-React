import React from 'react';
import {render} from 'react-dom';
import Map from './Map';
import RouterForm from './RouteForm';
import Result from './Result';

class App extends React.Component{

  constructor(props){
    super(props)
    this.findRoute = this.findRoute.bind(this)
    this.state = { route : {} }
    this.branchId = 0;
    this.icons = ['green', 'blue', 'red', 'yellow', 'purple'];
    this.seleccionado = 0;
    this.color = this.icons[this.seleccionado];
    this.waypoints = []
    this.puntoAnterior
  }


  findRoute(routeData){
    fetch("/route",{
      method : "POST",
      headers : {
        "content-type":"application/json"
      },
      body : JSON.stringify(routeData)
    }).then(resp => resp.json())
      .then( route => {
        this.setState({route})
       // console.log(route)
       this.branchId = route[0]["branch_id"]
        const points = route.map( s => ({lat:parseFloat(s.latitude),lng:parseFloat(s.longitude), branch : s.branch_id}))

        points.forEach(parada => {
          if(parada.branch == this.branchId){
            this.waypoints.push(parada)
            this.puntoAnterior = parada;
          }else{
            crearRutaMapa('grey', {lat: this.puntoAnterior["lat"], lng: this.puntoAnterior["lng"]},  {lat: parada["lat"], lng: parada["lng"]}, null, 'WALKING')
           
            crearRutaMapa(this.color, {lat: this.waypoints[0]["lat"], lng: this.waypoints[0]["lng"]},  {lat: this.waypoints[this.waypoints.length - 1]["lat"], lng: this.waypoints[this.waypoints.length - 1]["lng"]}, this.waypoints.slice(1, -1).map( p => ({ location : p , stopover : false})), 'DRIVING')
            this.branchId = parada.branch
            this.seleccionado += 1;
            this.color = this.icons[this.seleccionado];
            this.waypoints = []
            this.waypoints.push(parada)
          }



            marker : new google.maps.Marker({
              position: {lat: parada["lat"], lng: parada["lng"]},
              map: map,
              draggable: false,
              icon: 'http://maps.google.com/mapfiles/ms/icons/' + this.color + '-dot.png'
            })

          

          
        })

        crearRutaMapa(this.color, {lat: this.waypoints[0]["lat"], lng: this.waypoints[0]["lng"]},  {lat: this.waypoints[this.waypoints.length - 1]["lat"], lng: this.waypoints[this.waypoints.length - 1]["lng"]}, this.waypoints.slice(1, -1).map( p => ({ location : p , stopover : false})), 'DRIVING')
            


      })
      .catch(alert)
  }



  render(){
    return ( 
      <main>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    </link>
    <div class="container" >
        <RouterForm onFind={this.findRoute}/>
        </div>
        <div class="container" >
        <Result route={this.state.route} />
        </div>
      </main>
    )
  }

}



render(<App/>, document.getElementById('app'));

// Mapa de google maps


var bsas = {lat: -34.6037, lng: -58.3816};

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: bsas
})


fetch("/allRoutes")
  .then(resp => resp.json())
  .then()
  .catch(console.error)






  function crearRutaMapa(color, origin, destination, waypoints, travelMode){
    var directionsDisplay = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: color
      }
    })
    directionsDisplay.setMap(map);
    var directionsService = new google.maps.DirectionsService;

    directionsService.route({
      origin: origin ,
      destination: destination,
      waypoints: waypoints,
      optimizeWaypoints: true,
      travelMode: travelMode
    },function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        directionsDisplay.setOptions({
              suppressMarkers: true
          });
      } else {
          console.error(response);
      }
  })
  }