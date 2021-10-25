import { useState } from 'react';

function ChatBox() {

    const [message, setMessage] = useState<string>('');
    const [charCount, setCharCount] = useState<number>(0);

    const handleTextAreaChange = (msg): void => {
        setMessage(msg);
        setCharCount(msg.length);
    }

    return (
        <div className="flex flex-col h-52 border-t-2 border-gray-300 w-full p-6 mb-4">
            <div className="flex flex-row w-full h-full">
                <textarea placeholder="Write your message..." className="resize-none w-11/12 h-4/5 border-4 rounded-md mx-auto my-auto p-4" maxLength={500} name="" id="" cols={30} rows={10} onChange={(e) => handleTextAreaChange(e.target.value)}></textarea> 
                <button className="mx-auto bg-white text-yellow-300 hover:bg-yellow-500 h-2/5 my-auto w-1/12 rounded-md hover:text-white ml-8 border-yellow-300 border-4 transition-all" type="submit">Send</button>
            </div>
            <p className={`${charCount >= 500 ? 'text-red-500' : 'text-gray-300'}`}>{charCount}/500</p>
        </div>
    )
}

export default ChatBox
