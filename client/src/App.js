import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppBar from "./components/UI/layout/AppBar.js";
import Home from "./components/pages/Home.js";

function App() {
  return (
    <div className='App'>
      <AppBar />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path='/products' element={<Medicines />} />
          <Route path='/edit-medicine/:id' element={<EditForm />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/company-medicines/:id' element={<CompanyMedicines />} /> */}
          {/* <Route path='/' element={<Navigate replace to='/welcome' />}/> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
