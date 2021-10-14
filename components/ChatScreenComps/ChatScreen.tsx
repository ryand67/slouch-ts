import TopBar from './TopBar';
import SideBar from './SideBar';
import ChatBox from './ChatBox';
import ChatLog from './ChatLog';

function ChatScreen() {
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-items-center">
            <TopBar />
            <div className="w-screen h-screen flex flex-row">
               <SideBar /> 
               <div className="flex flex-col w-full">
                    <ChatLog />
                    <ChatBox />
               </div>
            </div>
        </div>
    )
}

export default ChatScreen