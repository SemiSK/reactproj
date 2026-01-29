import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


export default function ItemTest({searchTerm, items, setItems}) {
const [page, setPage] = useState(1);


useEffect( () => {
        fetch(`http://localhost:5000/items/${page}?search=${searchTerm}`).then(res => res.json()).then(data => setItems(data));
},[page,searchTerm, setItems]);

useEffect(() => {
  setPage(1);
}, [searchTerm]);


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
    <li class="page-item"><a class="page-link" onClick={(e) => {e.preventDefault();nextPage();}}>Next</a></li>
  </ul>
</nav>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item Name</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item) =>
        <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td><NavLink to={`/${item.id}`}>{item.name}</NavLink></td>
        </tr>
    )}
    
  </tbody>
</table>

</>
  );
}
