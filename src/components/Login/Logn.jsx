import { useState } from 'react';
import './Login.css';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const users = await response.json();
            // Simulate login check
            const user = users.find(user => user.email === username && user.password === password);

            if (user) {
                // Successfully signed in
                console.log('Logged in as:', user.fullName);
                setError('');
            } else {
                // Invalid credentials
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('Error fetching users:', error.message);
            setError('Failed to sign in');
        }
    };

    return (
        <div className="login-form">
            <div className="form-head">
                <p className="form-title">Hello there</p>
                <p className="form-description">Sign in now for great values at <strong>GovDeals</strong>.</p>
            </div>
            <form onSubmit={handleSignIn}>
                <div className="form-group input">
                    <input
                        type="text"
                        placeholder="Username"
                        autoComplete="off"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group input">
                    <input
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && (
						<span className="show-error">{error}</span>
					)}
                <div className="form-group stay-check">
                    <input type="checkbox" />
                    <p className="">Stay Signed In</p>
                </div>
                <div className="btn btn-login">
                    <button type="submit">Sign In</button>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="forgot-register">
                    <p>Forgot your <a>username</a> or <a>password</a>?</p>
                    <h4>Don't have an account?</h4>
                </div>
                <div className="btn btn-register">
                    <button>Register</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
