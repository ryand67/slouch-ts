import { useState, useEffect } from 'react'
import { db, auth } from '../../util/firebase';
import { collection, getDocs } from 'firebase/firestore';

// Components
import SideBarContact from './SideBarContact'

function SideBar() {

    const user = auth.currentUser;
    const [conversationList, setConversationList] = useState<Array<any>>([]);

    useEffect((): void => {
        getDocs(collection(db, `users/${user?.email}/conversations`)).then(res  => {
            setConversationList(res.docs)
        })
    }, [])

    return (
        <div className="w-1/5 h-full border-r-2 overflow-y-scroll">
            {conversationList.map((doc, i): JSX.Element => {
                return <SideBarContact key={i} index={i} info={doc.data()} length={conversationList.length} />
            })}        
            {/* bottom symbol */}
            <div className="mt-3 w-full h-4 flex items-center justify-center">
                <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    )
}

export default SideBar