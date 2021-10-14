import BounceLoader from "react-spinners/BounceLoader"

function Loading() {
    return (
        <div className="flex justify-items-center items-center w-full h-full">
           <BounceLoader color={`rgb(110, 231, 183)`} /> 
        </div>
    )
}

export default Loading
