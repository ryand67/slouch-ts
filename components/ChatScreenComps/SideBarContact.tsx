import { useState, useEffect } from 'react'
import { db } from '../../util/firebase';
import { useSelector, useDispatch } from 'react-redux'
import { setSelected } from '../../util/redux/selectedSlice';
import RootState from '../../util/redux/store';

function SideBarContact({ info, length, index }) {
    const selected = useSelector((state) => state.selected.value);
    const dispatch = useDispatch();

    const [initials, setInitials] = useState<String>('');

    useEffect((): void => {
        let split = info.name.split(' ');
        setInitials(`${split[0].charAt(0).toUpperCase()}${split[1].charAt(0).toUpperCase()}`)
    }, [])

    const handleCardClick = () => {
        dispatch(setSelected('asdf'));
        console.log(selected);
    }

    return (
        <div onClick={handleCardClick} className={`${index !== 0 ? 'border-t-2' : ''} ${index === length - 1 ? 'border-b-2' : ''} w-full h-32 bg-white flex flex-row p-2 items-center cursor-pointer`}>
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-300 text-white">{initials}</div>
            <div className="w-2/3 h-full mx-auto pt-2 flex flex-col">
                <h1 className="font-bold text-gray-500">{info.name}</h1>
                <p className="text-gray-700 overflow-hidden leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing</p>
            </div>
        </div>
    )
}

export default SideBarContact
