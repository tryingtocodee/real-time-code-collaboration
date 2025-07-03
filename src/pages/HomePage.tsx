import { useState } from "react";
import GeneralForm from "../components/ui/generalForm";
import GenericButton from "../components/ui/genericButton";

export default function HomePage() {
    const [roomId, setRoomId] = useState("")
    const [username , setUsername] = useState("")

    const inputFields = [
        {
        label: "roomId",
        placeholder: "Add Room Id",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setRoomId(e.target.value)
    },
    {
        label: "Username",
        placeholder : "Add username",
        onChange : (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    }
    ]
    return (
        <div className="h-screen bg-gray-200 flex items-center justify-center">
            <GeneralForm img={<img src="/code-sync.png" />} button={<GenericButton text="join" sizeStyle="sm" varientStyle="primary" />}
                input={inputFields} headline="Paste invitation room Id" bottomText={
                    <span>if you dont have room id then create {" "} <a href="" className="text-blue-500">create one</a></span>} />
        </div>
    )
}