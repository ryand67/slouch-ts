import { auth } from '../../util/firebase';
import { signOut } from 'firebase/auth';
import SearchBar from './SearchBar';

function TopBar() {
    return (
        <div className="w-full flex flex-row justify-between items-center px-4 bg-yellow-500 h-16">
           <h1 className="font-yellowtail text-white text-4xl">Slouch</h1> 
           <SearchBar />
           <button onClick={() => signOut(auth)} className="text-white border-2 border-white rounded py-2 px-4 hover:text-yellow-300 hover:bg-white transition-all">Sign Out</button>
        </div>
    )
}

export default TopBar