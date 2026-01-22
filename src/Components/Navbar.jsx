import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { redirect } from "react-router";

function Navbar() {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");


    function handleSearch(e){
        e.preventDefault();
        if (searchTerm.trim() !== "") {
        // navigate to the search route
        // redirect(`/test?search=${encodeURIComponent(searchTerm)}`);

        navigate({
            pathname: "/test",
            search: `?search=${encodeURIComponent(searchTerm)}`,
            state: { some: "state" },
            });
        }
    }

    return (  

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <NavLink to={"/"}><a class="nav-link active" aria-current="page">Home</a></NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to={"Items"}><a class="nav-link">Link</a></NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to={"test"}><a class="nav-link">Items Test</a></NavLink>
                    </li>
                </ul>
                <form class="d-flex" role="search" onSubmit={handleSearch}>
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
    );
}

export default Navbar;