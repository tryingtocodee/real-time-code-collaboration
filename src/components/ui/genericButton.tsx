interface ButtonProps {
    text : string
    onClick? : (e : React.MouseEvent<HTMLButtonElement>) => any
    varientStyle : "primary" | "secondary"
    sizeStyle : "sm" | "md" | "lg"
}

const sizeStyle = {
    "sm" : "p-1",
    "md" : "p-2 text-xl",
    "lg" : "p-3 text-2xl"
}

const varientStyle = {
    "primary" : "bg-green-400 text-black text-center",
    "secondary" : "bg-black text-green-300 text-center"
}
const defaultStyle = "rounded-md flex items-center justify-center w-full"


export default function GenericButton(props : ButtonProps){
    return (
        <button onClick={props.onClick} className={`${sizeStyle[props.sizeStyle]} ${varientStyle[props.varientStyle]} ${defaultStyle}`}>
            {props.text}
        </button>
    )
}