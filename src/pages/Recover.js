import { Link } from 'react-router-dom'
import { useState } from 'react'

const Recover = () => {
    const [userPassword, setUserPassword] = useState('')
    const [userPasswordRepeat, setUserPasswordRepeat] = useState('')
    const [recoverPending, setRecoverPending] = useState(false)

    const handleRecover = (e) => {
        e.preventDefault()
        if (!recoverPending) {
            const recoverDetails = { userPassword, userPasswordRepeat }

            setRecoverPending(true)

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
            <div className="recover">
                <h1>Recover your password</h1>
                <span className="teaserTxt">Regain access to your account.</span>

                <div className="guestForm">
                    <form onSubmit={handleRecover}>
                        <label>New password:</label>
                        <input 
                            type="password" 
                            required 
                            value={userPassword} 
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                        <label>Repeat new password:</label>
                        <input 
                            type="password" 
                            required 
                            value={userPasswordRepeat} 
                            onChange={(e) => setUserPasswordRepeat(e.target.value)}
                        />
                        <button className={(recoverPending ? 'pending' : '')}><span className="btnTxt">Save new password</span></button>
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

export default Recover;