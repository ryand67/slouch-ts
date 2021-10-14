import { useState } from 'react'
import { validate } from 'email-validator';
import { db, auth } from '../../util/firebase'
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignUp({ changeCredState }) {

    const [errorFlag, setErrorFlag] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async e => {
        e.preventDefault();

        email.trim();
        name.trim();
        password.trim();
        confirmPassword.trim();

        if (!validate(email)) {
            setErrorFlag(true);
            setErrorMsg('Please use a valid email');
            return;
        }

        if (password !== confirmPassword) {
            setErrorFlag(true);
            setErrorMsg('Make sure the passwords match');
            return;
        }

        if (email, password, confirmPassword, name) {
            await setDoc(doc(db, 'users', email), {
                name,
                email
            })
            await createUserWithEmailAndPassword(auth, email, password)
                .then(() => {

                })
        } else {
            setErrorFlag(true);
            setErrorMsg('Missing field')
        }
    }

    return (
        <div className="w-full">
            <form onSubmit={(e) => handleSignUp(e)} className="flex flex-col w-full">
                {errorFlag ? <p onClick={() => setErrorFlag(false)} className="text-red-500 font-extrabold py-2">{errorMsg}</p> : ''}
                <label className="py-4" htmlFor="email">Email:</label>
                <input onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded p-2 focus:border-green-300" type="text" placeholder="Email" />
                <label className="py-4" htmlFor="name">Name:</label>
                <input className="border border-gray-300 rounded p-2 focus:border-green-300" onChange={(e) => setName(e.target.value)} placeholder="Name" type="text" name="name" id="" />
                <label className="py-4" htmlFor="password">Password:</label>
                <input onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded p-2 focus:border-green-300" type="password" placeholder="Password" name="password" id="" />
                <label className="py-4" htmlFor="passwordRepeat">Confirm Password:</label>
                <input onChange={(e) => setConfirmPassword(e.target.value)} className="border border-gray-300 rounded p-2 focus:border-green-300" type="password" placeholder="Confirm Password" name="passwordRepeat" id="" />
                <p onClick={() => changeCredState(true)} className="text-center my-6">Already have an account? <span className="cursor-pointer underline text-green-400">Sign in!</span></p>
                <button onClick={(e) => handleSignUp(e)} className="rounded bg-green-300 w-44 mx-auto py-3 text-white hover:bg-white hover:text-green-300 transition-all border-4 border-green-300" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
