import './App.scss';
import { Routes,Route } from "react-router-dom";
import About  from "./containers/about";
import Home  from "./containers/home";
import  Contact  from "./containers/contact";
import  Resume  from "./containers/resume";
import  Skills  from "./containers/skills";

import Navbar from "./components/navbar";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import particles from './utils/particles';

function App() {
  // const handleInit= async(main)=>{
  //   await loadFull(main)
  // }
  return (
   <div className='App'>
    {/* <Particles id="particles"  options={particles} init={handleInit}/> */}
    <Navbar/>
    <div className='App__main-page-content'>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resume' element={<Resume/>}/>
      
      <Route path='/skills' element={<Skills/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;
