import { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';

function Credentials() {

    const [loginSignup, setLoginSignup] = useState(true);

    return (
        <div className="flex flex-col h-auto w-11/12 lg:w-1/2 md:w-2/3 p-16 shadow-lg rounded-lg items-center justify-items-center bg-white">
            <h1 className="font-yellowtail text-6xl text-center text-green-400">Slouch</h1>
            {loginSignup ? <Login changeCredState={setLoginSignup} /> : <SignUp changeCredState={setLoginSignup} />}
        </div>
    )
}

export default Credentials