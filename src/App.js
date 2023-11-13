import React, { useState } from 'react';
import './App.css';
import { formStyle, inputStyle, smallStyle, signupStyle, buttonStyle } from './styles'; // this is the Sharing Styles Across Components.
import backgroundImage from './backgroundImage/background.jpg';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };
 
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    
  };
  // in this code the inline styling is applied at the form.
  return (
    <div className="App">
      <header className="App-header" style={centerStyle}>
      <h1>LOGIN</h1>
        <form style={formStyle}> 
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            style={inputStyle}
            required
          />
          <small style={smallStyle}>Forgot Password?</small>
          <small style={signupStyle}> Sign up </small>
          <button onClick={login} style={buttonStyle}>
            Log In
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
