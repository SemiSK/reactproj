import { NavLink } from "react-router-dom";

function Navbar() {
    return (  
        <div>
            <ul>
                <NavLink to={"/"}><li>Home</li></NavLink>
                <NavLink to={"Items"}><li>Items</li></NavLink>
            </ul>
        </div>
    );
}

export default Navbar;