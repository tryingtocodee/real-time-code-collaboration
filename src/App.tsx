import EditorPage from "./pages/EditorPage";
import HomePage from "./pages/HomePage";
import { Routes , Route } from "react-router";

export default function App(){
  return (
    <div className="text-3xl text-blue-300">
      <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="editor/:roomId" element={<EditorPage/>} />
      </Routes>
    </div>
  )
}