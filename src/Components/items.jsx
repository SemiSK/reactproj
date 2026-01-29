import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import data from '../data/data.json'

export default function Items(){
    const [items, setItems] = useState([]);

    useEffect( () => {fetch(`http://localhost:5000/items`).then(res => res.json()).then(data => setItems(data));},[]);

    return(
        <ul>
            {items.map( i => 
                <NavLink to={"/" + i.id}><li key={i.id}>{i.name}</li></NavLink>
            )}
        </ul>
    )
}