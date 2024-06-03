import React from 'react'; //import React library

function RequireAuth() {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    const checkLoginStatus = () => {

        setTimeout(() => {
            setUserIsLoggedIn(true);
        }, 2000);
    };

    useEffect(() => {
        checkLoginStatus();
    }, []);
  
    if(!userIsLoggedIn) { 
      return <Login />;
    }
    else { 
      return <HikesPage />
    }
  }
export default RequireAuth;