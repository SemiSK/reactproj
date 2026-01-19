import data from '../data/data.json'
import { useParams } from "react-router"


function Item() {
    const { itemId } = useParams()
    const item = data.find(
        (item) => item.id === Number(itemId)
      );


    
    return ( 
        <>
            <div>{item.name}</div>
            <div>{itemId}</div>
            <br/>
            <div>Buy price: {item.buy_price}</div>
            <div>Buy quantity: {item.buy_quantity}</div>
            <div>Sell price: {item.sell_price}</div>
            <div>Sell quantity: {item.sell_quantity}</div>
        </>
     );
}

export default Item;