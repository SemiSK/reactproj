import { useParams } from "react-router"
import goldCoin from "../assets/18px-Gold_coin.png";
import silverCoin from "../assets/18px-Silver_coin.png";
import copperCoin from "../assets/18px-Copper_coin.png";
import { useEffect, useState } from 'react'

function convertCopper(totalCopper) {
    const GOLD_IN_COPPER = 100 * 100; // 1 gold = 10,000 copper
    const SILVER_IN_COPPER = 100;     // 1 silver = 100 copper

    const gold = Math.floor(totalCopper / GOLD_IN_COPPER);
    const remainingAfterGold = totalCopper % GOLD_IN_COPPER;

    const silver = Math.floor(remainingAfterGold / SILVER_IN_COPPER);
    const copper = remainingAfterGold % SILVER_IN_COPPER;

    return { gold, silver, copper };
}

function coinsTotal(coins){
  let coinsNotConverted = convertCopper(coins);
  return (
    <>
      <img src={goldCoin} alt="gold coin" style={{width:18, height:18}} />{coinsNotConverted.gold}  
      <img src={silverCoin} alt="gold coin" style={{width:18, height:18}} />{coinsNotConverted.silver}  
      <img src={copperCoin} alt="gold coin" style={{width:18, height:18}} />{coinsNotConverted.copper}  
    </>
  );
}

function Item({data}) {
    const { itemId } = useParams()
    const [imageUrl, setImageUrl] = useState(null);

    useEffect( () => {fetch(`https://api.guildwars2.com/v2/items/${itemId}`).then(res => res.json()).then(data => setImageUrl(data.icon));},[itemId]);

    console.log(imageUrl);

    const item = data.find(
        (item) => item.id === Number(itemId)
      );

    
    
    return ( 
        <div className='mx-auto'>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="mb-4"><img src={imageUrl} alt="gold coin" style={{width:64, height:64}} />  {item.name}</h2>
                        <table className="table table-striped table-hover table-bordered">
                            <tbody>
                                <tr>
                                    <th scope="row">Item ID</th>
                                    <td>{itemId}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>{item.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Prices</th>
                                    <td>
                                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <div><strong>Buy:</strong> {coinsTotal(item.buy_price)}</div>
                                            <div><strong>Sell:</strong> {coinsTotal(item.sell_price)}</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Buy Quantity</th>
                                    <td>{item.buy_quantity}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sell Quantity</th>
                                    <td>{item.sell_quantity}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Last Update</th>
                                    <td>{new Date(item.lastUpdate).toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Item;