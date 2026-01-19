import { NavLink } from 'react-router-dom'
import data from '../data/data.json'

export default function Items(){

    return(
        <ul>
            {data.map( i => 
                <NavLink to={"/" + i.id}><li key={i.id}>{i.name}</li></NavLink>
            )}
        </ul>
    )
}