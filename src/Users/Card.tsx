import React,{ReactNode} from 'react'
import './User.scss'




type card = {
 
    name:string;
    amount:number;
    svg:ReactNode;
    backgroundColor:any

}


export const Card:React.FC<card> = ({svg, name, amount, backgroundColor}) => {
const style ={
    
    backgroundColor:{backgroundColor}
}
  
  return (
    <div>
        <div className="user-card">
            <div className="card-temp">
                <div className="svg" style={style.backgroundColor} >
                {svg}
                </div>
                <div className="user-text">{name}</div>
                <div className="user-number">{amount}</div>
            </div>
        </div>
    </div>
  )
}
