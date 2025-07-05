import { useState } from "react";
import GeneralForm from "../components/ui/generalForm";
import GenericButton from "../components/ui/genericButton";
import { v4 as uuidV4 } from "uuid"
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";


export default function HomePage() {
    const [roomId, setRoomId] = useState("")
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    function createRoom(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        const uuid = uuidV4()
        setRoomId(uuid)
        toast.success("created room")
    }

    function joinRoom(e : React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        if(!roomId || !username){
            toast.error("roomid and username is required")
            return
        }

        navigate(`/editor/${roomId}` , {
            state : {
                username
            }
        })
    }

    function handleKeyEnter(e : React.KeyboardEvent<HTMLInputElement>){
        if(e.code === 'Enter'){
            console.log('event' , e.code)
            joinRoom(e  as any)
        }
    }
    const inputFields = [
        {
            label: "roomId",
            placeholder: "Add Room Id",
            value: roomId,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setRoomId(e.target.value),
            onKeyUp : handleKeyEnter
        },
        {
            label: "Username",
            placeholder: "Add username",
            value: username,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
            onKeyUp : handleKeyEnter
        }
    ]

    return (
        <div className="h-screen bg-gray-200 flex items-center justify-center">
            <GeneralForm img={<img src="/code-sync.png" />} button={<GenericButton onClick={joinRoom} text="join" sizeStyle="sm" varientStyle="primary" />}
                input={inputFields} headline="Paste invitation room Id" bottomText={
                <span>if you dont have room id then create {" "} <a onClick={createRoom} href="" className="text-blue-500">create one</a></span>} />
        </div>
    )
}