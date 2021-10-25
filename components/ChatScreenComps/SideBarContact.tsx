import { useState, useEffect } from 'react'
import { db } from '../../util/firebase';


function SideBarContact({ info, index }) {

    const [initials, setInitials] = useState<String>('');

    useEffect((): void => {
        let split = info.name.split(' ');
        setInitials(`${split[0].charAt(0).toUpperCase()}${split[1].charAt(0).toUpperCase()}`)
    }, [])

    return (
        <div className={`${index !== 0 ? 'border-t-2' : ''} w-full h-32 bg-white flex flex-row p-2 items-center`}>
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-300 text-white">{initials}</div>
        </div>
    )
}

export default SideBarContact
