
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';

function App() {
  return (
    <>
   <Navbar title="textutils"/>
   
   < div className="container my-3">
   <Textform heading="Enter The Text To Analyze"/>
   </div>
   <div className="container">
    <About/>
   </div>




    </>

  );
}

export default App;





