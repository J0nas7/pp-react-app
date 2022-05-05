import { Link } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [registerPending, setRegisterPending] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault()
        if (!registerPending) {
            const accountDetails = { userEmail, userPassword }

            setRegisterPending(true)

            /*const postUrl = 'https://jsonplaceholder.typicode.com/posts'
            fetch(postUrl, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            })
                .then(() => {
                    console.log("new blog added")
                    setIsPending(false)
                    history.push('./')
                })*/
        }
    }

    return (
            <div className="register">
                <h1>Sign up for an account!</h1>
                <span className="teaserTxt">Join many other second-hand fans.</span>

                <div className="guestForm">
                    <form onSubmit={handleRegister}>
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
                        <button className={(registerPending ? 'pending' : '')}><span className="btnTxt">Create account</span></button>
                    </form>
                </div>

                <span className="guestLink">
                    Already have an account?&nbsp;
                    <Link to="/login" className="underline">
                        Sign in
                    </Link>
                </span>
            </div>
    );
}

export default Register;