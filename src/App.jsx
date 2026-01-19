import { useState } from 'react'
import './App.css'
import data from './data/data.json'
import { Route, Routes } from "react-router"
import Items from './Components/items'
import Navbar from './Components/Navbar'
import Item from './Components/Item'
import Homepage from './Components/Homepage'
import ItemTest from './Components/ItemTest'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Items" element={<Items/>} />
        <Route path="/test" element={<ItemTest/>} />
        <Route path=":itemId" element={<Item/>} />

      </Routes>
    </>
  )
}

export default App
