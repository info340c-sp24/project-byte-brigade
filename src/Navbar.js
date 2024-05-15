import React from 'react'; //import React library

function Navbar({ onLogout }) {
    return (
     <header>
        <div className="topnav">
            <a class="active" href="#home">Home</a>
            <a href="quiz.html">Demo Quiz</a>
            <a href="login.html">Profile</a>
            <a href="info.html">DEMO PAGE-TEMP</a>
            <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search..." name="search"/>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <div>
                <button onClick={onLogout} className="nav-link btn-link">Logout</button> 
            </div>
        </div>

        <h1>Husky Hikes</h1>
        <p>Welcome Huskies to some Washington hikes!</p>
    </header>
        
    );

}

export default Navbar;