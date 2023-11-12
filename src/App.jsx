import { Route, Routes } from "react-router-dom"
import './App.css'
import Main from "./components/main/Main"
import Error from "./components/error/Error"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<Error/>}/>
        {/* <Route path="/" element={}/> */}
      </Routes>
    </>
  )
}

export default App
