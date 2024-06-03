import React from 'react'; //import React library

function Navbar({ onLogout }) {
    return (
        <header>
            
            <div className="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#quiz">Quiz</a>
                <button onClick={onLogout} className="nav-link">Logout</button>
            </div>
        </header>
        
    );

}

export default Navbar;