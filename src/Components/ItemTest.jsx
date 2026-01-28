import { useState } from "react";
import data from "../data/data.json"
import { NavLink } from "react-router-dom";

import { useEffect } from "react";

import { useSearchParams } from "react-router";

export default function ItemTest({searchTerm}) {
const [searchParams, setSearchParams] = useSearchParams();
const [page, setPage] = useState(1);
const [items, setItems] = useState([]);
const [dataLength, setDataLength] = useState(-1);

useEffect( () => {
    console.log(searchParams);
    if (!searchParams.has("search") ){
        fetch(`http://localhost:5000/items/${page}`).then(res => res.json()).then(data => setItems(data));
    }
    else{
        fetch(`http://localhost:5000/items/${page}?search=${searchParams.get("search")}`).then(res => res.json()).then(data => setItems(data));
    }
},[page,searchParams]);

useEffect( () => {
    fetch(`http://localhost:5000/items`).then(res => res.json()).then(data => setDataLength(data));
},[]);

function nextPage(){
    setPage(prev => prev + 1)
}

function prevPage(){
    setPage(prev => {if(prev > 1){ return prev - 1}else{ return 1}})
}

  return (
<>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" onClick={(e) => {e.preventDefault();prevPage();}}>Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" onClick={(e) => {e.preventDefault();nextPage();}}>Next</a></li>
  </ul>
</nav>
<p>Total items: {dataLength.dataLength}</p>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item Name</th>
      <th scope="col">Buy price</th>
      <th scope="col">Buy quantity</th>
      <th scope="col">Sell price</th>
      <th scope="col">Sell quantity</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item) =>
        <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td><NavLink to={`/${item.id}`}>{item.name}</NavLink></td>
        <td>{item.buy_price}</td>
        <td>{item.buy_quantity}</td>
        <td>{item.sell_price}</td>
        <td>{item.sell_quantity}</td>
        </tr>
    )}
    
  </tbody>
</table>

</>
  );
}
