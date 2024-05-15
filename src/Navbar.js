import React from 'react'; //import React library

function Navbar({ onLogout }) {
    return (
     <header>
        <button onClick={onLogout} className="nav-link">Logout</button> 
        <div className="topnav">
            <a href="/">Home</a>
            <a href="/quiz">Demo Quiz</a>
            <a href="/comment">Comments</a>
            <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search..." name="search"/>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            
            
            
        </div>
        
        <p>Welcome Huskies to some Washington hikes!</p>
    </header>
        
    );

}

export default Navbar;