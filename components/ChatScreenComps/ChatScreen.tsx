import TopBar from './TopBar';
import SideBar from './SideBar';

function ChatScreen() {
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-items-center">
            <TopBar />
            <div className="w-screen h-screen">
               <SideBar /> 
            </div>
        </div>
    )
}

export default ChatScreen