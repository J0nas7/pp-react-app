import { Link } from 'react-router-dom'
import { useState } from 'react'

const Forgot = () => {
    const [userEmail, setUserEmail] = useState('')
    const [forgotPending, setForgotPending] = useState(false)

    const handleForgot = (e) => {
        e.preventDefault()
        if (!forgotPending) {
            const email = { userEmail }

            setForgotPending(true)

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
            <div className="forgot">
                <h1>Forgot your password?</h1>
                <span className="teaserTxt">Don't worry! You can recover it easily.</span>

                <div className="guestForm">
                    <form onSubmit={handleForgot}>
                        <label>E-mail:</label>
                        <input 
                            type="text" 
                            required 
                            value={userEmail} 
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                        <button className={(forgotPending ? 'pending' : '')}><span className="btnTxt">Send recover e-mail</span></button>
                    </form>
                </div>

                <span className="guestLink">
                    Remember your password?&nbsp;
                    <Link to="/login" className="underline">
                        Sign in
                    </Link>
                </span>
            </div>
    );
}

export default Forgot;