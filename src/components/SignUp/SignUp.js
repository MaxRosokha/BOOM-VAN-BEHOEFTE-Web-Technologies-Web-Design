import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext/UserContext';
import logo from '../../image/Logo1.png';
import '../../Auth.css';

const SignUp = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email, firstName, lastName });
    navigate('/account');
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <Link to="/" className="auth-logo-link">
          <img src={logo} alt="Boom Van Behoefte Logo" className="auth-logo" />
        </Link>
        <nav className="auth-nav">
          <Link to="/signin" className={`auth-link`}>SIGN IN</Link>
          <Link to="/signup" className={`auth-link active`}>SIGN UP</Link>
        </nav>
      </header>
      <div className="auth-content">
        <h2 className="auth-title">SIGN UP</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="auth-input" required />
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="auth-input" required />
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="auth-input" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="auth-input" required />
          <button type="submit" className="auth-button">Go Shipping →</button>
        </form>
        <p className="auth-footer">
          <Link to="/signin">I already have an account</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
