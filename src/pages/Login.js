import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const [loginPending, setLoginPending] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        if (!loginPending) {
            setLoginPending(true)
            setErrorMsg("")
            const loginDetails = { userEmail, userPassword }

            const LoginCredentials = {
                email: userEmail,
                password: userPassword
            }
            await postData(LoginCredentials)
        }
    }

    const postData = (theData) => {
        var RequestUrl = "http://workspace.properpay.net/index.php"
        RequestUrl += "?Category=Profiles&Action=Login";
        console.log("theData")
        console.log(theData)
        axios.post(RequestUrl, theData)
            .then(res => {
                loginResult(res.data)
            })
    }

    const loginResult = (response) => {
        if (response.Result == "Login success") {
            localStorage.setItem("ProfileID", response.ProfileID);
            navigate.push('/')
        } else if (response.Result == "Deactivated") {
            localStorage.removeItem("ProfileID");
            setErrorMsg("Your profile is deactivated. Contact us to get it reopened.")
        } else if (response.Result == "Failed") {
            localStorage.removeItem("ProfileID");
            setErrorMsg("Login credentials does not exist. Please try again.")
        }
        setLoginPending(false)
    }

    return (
            <div className="login">
                <h1>Sign in to your account</h1>
                <span className="teaserTxt">Make some great second-hand deals</span>

                <div className="guestForm">
                    <form onSubmit={handleLogin}>
                        <label>E-mail:</label>
                        <input 
                            type="text" 
                            required 
                            value={userEmail} 
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                        <label>Password:</label>
                        <input 
                            type="password" 
                            required 
                            value={userPassword} 
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                        <button className={(loginPending ? 'pending' : '')}><span className="btnTxt">Log on</span></button>
                        <span className="errorMsg">{errorMsg}&nbsp;</span>
                    </form>
                </div>

                <span className="guestLink">
                    Don't you have an account yet?&nbsp;
                    <Link to="/register" className="underline">
                        Sign up
                    </Link>
                </span>
                <span className="guestLink">
                    Forgot your password?&nbsp;
                    <Link to="/forgot" className="underline">
                        Recover it
                    </Link>
                </span>
                <div className="clrBth"></div>
            </div>
    );
}

export default Login;