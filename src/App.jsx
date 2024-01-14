import { Route, Routes, useLocation } from "react-router-dom"
import './App.css'
import Main from "./components/main/Main"
import Error from "./components/error/Error"
import News from "./components/chapters/news/News"
import Chapters from "./components/chapters/Chapters"
import { useState } from "react"

function App() {
  const location = useLocation();
  const [preloader, setPreloader] = useState(location.pathname == "/" ? true : false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main preloader={preloader} setPreloader={setPreloader} />} />
        <Route path="*" element={<Error />} />
        <Route path="/chapter/*" element={<Chapters />} />
        <Route path="/direction/*" element={<Chapters />} />
        {/* <Route path="/" element={}/> */}
      </Routes>
    </>
  )
}

export default App
