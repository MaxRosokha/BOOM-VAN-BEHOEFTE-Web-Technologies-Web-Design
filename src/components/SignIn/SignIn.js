import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext/UserContext';
import logo from '../../image/Logo1.png';
import '../../Auth.css';

const SignIn = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username });
    navigate('/account');
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <Link to="/" className="auth-logo-link">
          <img src={logo} alt="Boom Van Behoefte Logo" className="auth-logo" />
        </Link>
        <nav className="auth-nav">
          <Link to="/signin" className={`auth-link active`}>SIGN IN</Link>
          <Link to="/signup" className={`auth-link`}>SIGN UP</Link>
        </nav>
      </header>
      <div className="auth-content">
        <h2 className="auth-title">SIGN IN</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="auth-input" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="auth-input" required />
          <button type="submit" className="auth-button">Sign In →</button>
        </form>
        <p className="auth-footer">
          <Link to="/signup">I don't have an account</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
