// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Task from './components/Task';




function App() {
  return (
    <div className="App">
    
<<<<<<< HEAD
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<About/>}></Route>
     <Route path='/Home' element={<Home/>}></Route>
     <Route path='/Login' element={<Login/>}></Route>
     <Route path='/Signup' element={<SignUp/>}></Route>
     <Route path='/Task' element={<Task/>}></Route>
      
     </Routes>
     </BrowserRouter>
=======
  <SignUp/>
>>>>>>> 16750bc33c733d3099d226224e384511e6cb3cc1
  

    </div>
  );
}

export default App;
