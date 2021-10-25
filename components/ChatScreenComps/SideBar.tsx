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
        <div className="w-1/5 bg-red-400 h-full border-r-2">
            {conversationList.map((doc, i): JSX.Element => {
                return <SideBarContact key={i} index={i} info={doc.data()} />
            })}        
        </div>
    )
}

export default SideBar