import { Route, Routes } from "react-router-dom"
import './App.css'
import Main from "./components/main/Main"
import Error from "./components/error/Error"
import News from "./components/chapters/news/News"
import Chapters from "./components/chapters/Chapters"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/chapter/*" element={<Chapters/>}/>
        <Route path="/direction/*" element={<Chapters/>}/>
        {/* <Route path="/" element={}/> */}
      </Routes>
    </>
  )
}

export default App
