import { useState } from "react";
import { Route, Routes } from "react-router"
import Items from './items'
import Navbar from './Navbar'
import Item from './Item'
import Homepage from './Homepage'
import ItemTest from './ItemTest'

function MainTemp() {
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/Items" element={<Items/>} />
            <Route path="/test" element={<ItemTest searchTerm={searchTerm}/>} />
            <Route path=":itemId" element={<Item/>} />

        </Routes>
        </>

      );
}

export default MainTemp;