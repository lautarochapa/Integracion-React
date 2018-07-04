import React from 'react'


export default class Map extends React.Component{

    constructor(props){
        super(props)
        this.markers = []
    }

    showMap(elm){
        this.map = new google.maps.Map(elm,{
            zoom: 4,
            center :  {lat: -25.344, lng: 131.036} // Bs As
        })
        this.map.addListener("click",(event)=>{
            const cords = event.latLng
            this.props.selectMapPoint({lat:cords.lat(),lng : cords.lng()})
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        nextProps.markers.forEach( marker => {
            
        })
        return false;
    }
      

    render(){
        return <div class="container" >
        
            <div style={{height:500,width:500}} ref={elm=>this.showMap(elm)}></div>
        </div>
    }
}
