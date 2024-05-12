import React from 'react'; //import React library

const Navbar= () => {
    return (
     <header>
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="quiz.html">Demo Quiz</a>
            <a href="login.html">Profile</a>
            <a href="info.html">DEMO PAGE-TEMP</a>
            <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search..." name="search"/>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>

        <h1>Husky Hikes</h1>
        <p>Welcome Huskies to some Washington hikes!</p>
    </header>
        
    );

}

export { Navbar };