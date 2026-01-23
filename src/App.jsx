import { useState } from 'react'
import './App.css'
import data from './data/data.json'
import { Route, Routes } from "react-router"
import Items from './Components/items'
import Navbar from './Components/Navbar'
import Item from './Components/Item'
import Homepage from './Components/Homepage'
import ItemTest from './Components/ItemTest'
import MainTemp from './Components/MainTemp'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></link>
      <MainTemp/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    </>
  )
}

export default App
