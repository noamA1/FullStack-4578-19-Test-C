import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppBar from "./components/UI/layout/AppBar.js";
import Home from "./components/pages/Home.js";
import AddMeeting from "./components/pages/AddMeeting.js";

function App() {
  return (
    <div className='App'>
      <AppBar />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/add-meeting' element={<AddMeeting />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
