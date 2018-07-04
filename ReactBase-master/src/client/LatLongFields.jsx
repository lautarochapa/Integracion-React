import React from 'react'

export default class LatLongFields extends React.Component{

    constructor(props){
        super(props)
        
    }

    changeValue(field,value){
        this.props.onChange(this.props.id,field,value)
    }

    render(){
        return (
            <div>
                <label>{this.props.title}</label>
                <div class="form-group">
                    <label >Direccion:</label>
                    <input type="text" class="form-control" value={this.props.value.street} onChange={(e) => this.changeValue("street",e.target.value)} />
                </div>
            </div>
        )
    }

}