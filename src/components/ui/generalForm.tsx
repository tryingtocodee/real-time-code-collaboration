import type { ReactElement } from "react"

interface FormProps {
    headline : string 
    bottomText : ReactElement
    input : InputField[]
    button : ReactElement
    img : ReactElement
}

interface InputField {
    label : string
    placeholder : string
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void
}



export default function GeneralForm(props: FormProps) {
  return (
    <div className="flex flex-col px-4 py-6 bg-black rounded-lg shadow-md w-full max-w-md text-white">
      <div className="p-3 flex justify-center">{props.img}</div>
      <div className="p-3 text-center text-xl font-semibold">
        {props.headline}
      </div>
      <div className="mb-4 space-y-3 text-white">
        {props.input.map((item, index) => (
          <div key={index} className="flex flex-col">
            <label className="mb-1 text-sm ">{item.label}</label>
            <input
              type="text"
              onChange={item.onChange}
              placeholder={item.placeholder}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        ))}
      </div>
      <div className="mb-3 w-full">{props.button}</div>
      <div className="text-center text-sm text-white">
        {props.bottomText}
      </div>
    </div>
  );
}