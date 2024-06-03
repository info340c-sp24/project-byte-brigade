import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HikesPage from './HikesPage.js';
import HikeDetailPage from './HikeDetailPage.js';
import Navbar from './Navbar.js';
import QuizControl from './quizcontrol.js';
import { getAuth, onAuthStateChanged, EmailAuthProvider, GoogleAuthProvider, signOut } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function App({hikes}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unregisterAuthObserver = onAuthStateChanged(auth, setUser);
    return () => unregisterAuthObserver();
  }, []);


  const firebaseUIConfig = {
    signInOptions: [ //array of sign in options supported
      //array can include just "Provider IDs", or objects with the IDs and options
      GoogleAuthProvider.PROVIDER_ID,
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: { //"lifecycle" callbacks
      signInSuccessWithAuthResult: () => {
        return false; //don't redirect after authentication
      }
    }
  }

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("User signed out successfully");
    }).catch((error) => {
      console.error("Logout failed: ", error);
    });
  };

  if (!user) {
    return (
      <div className="container">
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={getAuth()} />
      </div>
    );
  } else {
    return (
      <div >
        <div className="container">
          <header>
            <div class="topnav" className="col-3">
             <Navbar onLogout={handleLogout} />
            </ div>
            <h1>Husky Hikes</h1>
            <p>Welcome Huskies to some Washington hikes!</p>
          </header>
        </div>

        <Routes>
          <Route path="/" element={<HikesPage hikes={hikes} />} />
          <Route path="/hike/:name" element={<HikeDetailPage />} />
          <Route path="/quiz" element={<QuizControl />} />
        </Routes>

        <footer>
          <div>&copy; Husky Hikes, University of Washington 2024</div>
        </footer>
      </div>
    );
  }
}

export default App;
