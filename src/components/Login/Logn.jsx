import './Login.css';

const Login = () => {
    return(
        <div className="login-form">
            <div className="form-head">
                <p className="form-title">Hello there</p>
                <p className="form-description">Sign in now for great values at <strong>GovDeals</strong>.</p>
            </div>
            <form>
                <div className="form-group input">
                    <input type="text" placeholder="Username" autoComplete="off" required/>
                </div>
                <div className="form-group input">
                    <input type="password" placeholder="Password" autoComplete="off" required/>
                </div>
                <div className="form-group stay-check">
                    <input type="checkbox" /> 
                    <p className="">Stay Signed In</p>
                </div>
                <div className="btn btn-login">
                    <button>Sign In</button>
                </div>
                <div className="forgot-register">
                    <p>Forgot your <a>username</a> or <a>password</a>?</p>
                    <h4>Don't have an account?</h4>
                </div>
                <div className="btn btn-register">
                    <button>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login;