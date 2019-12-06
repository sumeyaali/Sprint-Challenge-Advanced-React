import React from "react";


export const PlayerCard = props => {

return (
    <div className="playerCard"> 

    <div> Name: {props.name} </div>
    <div> Country:{props.country} </div>
    <div> # of searches: {props.searches} </div><br/>
       
    </div>

)

}