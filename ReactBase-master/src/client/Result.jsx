import React from 'react'

// borra todas las paradas intermedias
function beautifyRoute( points ){
    console.log(points)
    return points.reduce( (route,point)=> {
        const resp = route.concat(point)
        
        if(resp.length < 3){
            return resp
        }

        if( resp[resp.length - 2].branch_id === resp[resp.length - 1].branch_id &&
            resp[resp.length - 3].branch_id === resp[resp.length - 2].branch_id ){
            resp.splice( resp.length - 2 , 1 )
            return resp
        }
        return resp

    } ,[])
}






export default function Result (props){
    if(! props.route || !props.route.length)
        return null 
    const route = beautifyRoute(props.route)


    const trs = route.map( (point,i)  =>{
        const action = i % 2 == 0 ? "Caminar hasta " : "Bajarse en " 
        const label = point.name + " del ramal " + point.branch_name
        return <tr><td key={i}>{ action + label }</td></tr>
    })
    return <div class="container" ><table class="table">
    <thead><tr>
      <th>Pasos a seguir</th>
    </tr></thead>
<tbody>
    
{trs}
    </tbody>
  </table></div>
}