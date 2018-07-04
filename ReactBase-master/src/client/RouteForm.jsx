import React from 'react'
import LatLongFields from './LatLongFields';

export default class RouterForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            from : { lat : 0 , lng : 0, street : 'Olazabal 2250'},
            to : { lat : 0 , lng : 0, street: 'Av. Álvarez Thomas 636'}
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(id,field,value){
        this.setState( prevState => {
            const newField = Object.assign({},prevState[id],{[field]:value})
            return Object.assign({},prevState,{[id]:newField})
        })
    }

    render(){
        return (
            <div>
                <LatLongFields 
                    id="from" 
                    title="Desde" 
                    value={this.state.from}
                    onChange={this.onChange} />
                <LatLongFields 
                        id="to" 
                        title="Hasta" 
                        value={this.state.to}
                        onChange={this.onChange} />
                <button type="button" class="btn btn-primary" onClick={() => this.props.onFind(this.state)}>Buscar ruta</button>
                <br></br><br></br>
             </div>
        )
    }

}