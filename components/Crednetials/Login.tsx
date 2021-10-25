import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../util/firebase';
import { validate } from 'email-validator';

function Login({ changeCredState }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorFlag, setErrorFlag] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        if (!validate(email)) {
            setErrorFlag(true);
            setErrorMsg('Must be a valid email address');
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {

            })
    }

    return (
        <div className="w-full">
            <form onSubmit={(e) => handleSignIn(e)} className="flex flex-col w-full">
                {errorFlag ? <p onClick={() => setErrorFlag(false)} className="text-red-500 font-extrabold py-2">{errorMsg}</p> : ''}
                <label className="py-4" htmlFor="email">Email:</label>
                <input onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded p-2 focus:border-yellow-300" type="text" placeholder="Email" />
                <label className="py-4" htmlFor="password">Password:</label>
                <input onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded p-2 focus:border-yellow-300" type="password" placeholder="Password" name="password" id="" />
                <p onClick={() => changeCredState(false)} className="text-center my-6">Don't have an account? <span className="cursor-pointer underline text-yellow-400">Sign up!</span></p>
                <button onClick={(e) => handleSignIn(e)} className="rounded bg-yellow-500 w-44 mx-auto py-3 text-white hover:bg-white hover:text-yellow-300 transition-all border-4 border-yellow-300" type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Login