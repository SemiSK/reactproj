import { Outlet } from "react-router-dom";

function Homepage() {
    return ( 
        <>
        <h1>Welcome to Guild Wars Trade Post!</h1>
            <h2>This site shows Trading Post data from the game 'Guild Wars 2'.</h2>
            <span>Use the navigation bar to explore the site.</span>
            <br />
            <span> You can search for items using the search bar in the navigation bar.</span>
            <br />
            <span> The 'Bad List' page shows a non-paginated list of items, while the 'Paginated List' page shows a paginated list of items.</span>
        </>
     );
}

export default Homepage;