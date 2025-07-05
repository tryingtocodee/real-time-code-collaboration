import GeneralEditor from "../components/ui/generalEditor";
import GenericButton from "../components/ui/genericButton";
import { useState } from "react";

export default function EditorPage(){
    const [client , setClient] = useState([
        {socketId : 1 , username : 'test 1'},
        {socketId : 2 , username : "test 2"}
    ])
    return (
        <div>
            <GeneralEditor dynamic={client} img={<img src="/code-sync.png"/>} bottomButton1={<GenericButton sizeStyle="sm" text="Copy Room Id" varientStyle="secondary"/>}/>
        </div>
        
    )
}