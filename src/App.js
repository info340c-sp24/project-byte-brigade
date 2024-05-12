import React from 'react'; //import React library
import { HikesPage } from './HikesPage.js';
import { Navbar } from './Navbar.js';


const App = () => {
    return (
        <div>
            <Navbar />
            <HikesPage />
        </div>
    );

}

export { App };