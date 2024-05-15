import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory(); // Get the history object from react-router-dom

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Redirect to the main page
        history.push('/main'); // Change '/main' to the path of your main page
    };

    // Render the login and signup forms
    return (
        <div className="container">
            <form onSubmit={handleSubmit}> {/* Attach handleSubmit to the login form's onSubmit event */}
                <h2>Login</h2>
                <label htmlFor="login_username">Username:</label>
                <input type="text" id="login_username" name="login_username" required/><br/>
                <label htmlFor="login_password">Password:</label>
                <input type="password" id="login_password" name="login_password" required/><br/>
                <input type="submit" value="Login"/>
            </form>
            
            <form onSubmit={handleSubmit}> {/* Attach handleSubmit to the sign-up form's onSubmit event */}
                <h2>Sign Up</h2>
                <label htmlFor="signup_username">Username:</label>
                <input type="text" id="signup_username" name="signup_username" required/><br/>
                <label htmlFor="signup_password">Password:</label>
                <input type="password" id="signup_password" name="signup_password" required/><br/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    );
};

export { Login };