import EditorPage from "./pages/EditorPage";
import HomePage from "./pages/HomePage";
import { Routes , Route } from "react-router";

export default function App(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="editor/:roomId" element={<EditorPage/>} />
      </Routes>
    </div>
  )
}