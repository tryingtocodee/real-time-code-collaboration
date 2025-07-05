import type { ReactElement } from "react"

interface GeneralEditorProps{
    img? : ReactElement
    bottomButton1? : ReactElement
    bottomButton2? : ReactElement
    dynamic : DynamicComponent[]
}

interface DynamicComponent  {
    socketId : number
    username : string
}


export default function GeneralEditor(props : GeneralEditorProps){
    return (
        <div className="grid grid-cols-5 h-screen">
            <div className="col-span-1 flex flex-col rounded-md p-5">
                <div>
                    {props.img}
                </div>
                <div className="mt-5 p-5">
                    Connected
                    <div className="mt-3 flex">
                        {props.dynamic.map((item)=>(
                            <div className="mt-3 ml-5" key={item.socketId}>
                                <div className="rounded-md bg-blue-500 p-2 w-12 flex justify-center items-center">
                                    {item.username.split(' ').map((word) => word.charAt(0).toUpperCase()).join("")}
                                </div>
                                <div>
                                    {item.username}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="m-auto">
                    {props.bottomButton1}
                    {props.bottomButton2}
                </div>
            </div>
            <div className="col-span-4 bg-gray-100 ">
                right side
            </div>
        </div>
    )
}