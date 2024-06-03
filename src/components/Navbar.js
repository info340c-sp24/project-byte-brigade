import React from 'react'; //import React library

function Navbar({ onLogout }) {
    return (
     <header>
        <button onClick={onLogout} className="nav-link">Logout</button> 
        <div className="topnav">
            <a href="/">Home</a>
            <a href="/quiz">Demo Quiz</a>
            <a href="/comment">Comments</a>
            
        </div>
        
        <p>Welcome Huskies to some Washington hikes!</p>
    </header>
        
    );

}

export default Navbar;