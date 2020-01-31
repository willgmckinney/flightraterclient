import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Auth from './Auth/Auth';
import Navigation from './Navigation/Navigation';
// import FlightSearch from './FlightSearch/FlightSearch';



function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const Logout = () => {
    setSessionToken(localStorage.removeItem('token'));
  }

  const switcharoo = () => {
    return (sessionToken === localStorage.getItem('token') ? <Navigation token={sessionToken}/> : <Auth updateToken={updateToken}/>)
  }

  const introText = () => {
    return (sessionToken === localStorage.getItem('token') ? null : <h2>Thank you for visiting the page! This site is designed to give a voice back to flight passengers that want to enjoy their flights without having hidden fees or last minute delays</h2>)
  }

  return (
    <div className="App">
      <Navbar Logout={Logout}/>
      {introText()}
      {switcharoo()}
    </div>
  );
}

export default App;
