import React from "react";


export const PlayerCard = props => {

return (
    <div className="playerCard"> 
    <div data-testId="name"> Name: {props.name} </div>
    <div data-testId="country"> Country:{props.country} </div>
    <div> # of searches: {props.searches} </div>
       
    </div>

)

}