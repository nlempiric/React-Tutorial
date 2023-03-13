import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Updating from './components/Updating';
import Unmounting from './components/Unmounting';
import Hooks from './components/Hooks';
import Customhooks_uses from './components/Customhooks_uses';
import Lists from './components/Lists';
import Cond from './components/Cond';
import Images from './components/Images';
import Formex from './components/Formex';
import Mul_inputs from './components/Mul_inputs';
import Handling_form from './components/Handling_form';
import Uncontrolled_form from './components/Uncontrolled_form';
import Callbacks from './components/Callbacks';
import LiftingState from './components/LiftingState';
import ContextFile from './components/ContextFile';


// let name="asd"
const a=[1,2,3,4];
function App() {
  return (
    <>
     <Navbar title="Myapp" aboutText="About Us"/>
     {/* <Navbar></Navbar> */}
    <div className="container my-3">
      {/* <TextForm heading="Enter the text to analyze below"/> */}
    {/* <About></About> */}
    {/* <Updating favcol="Red"></Updating> */}
    {/* <Unmounting></Unmounting> */}
    {/* <Hooks/> */}
    {/* <Customhooks_uses/> */}
    {/* <Lists numbers={a}/> */}
    {/* <Cond consumer={false} primeMember={true}></Cond> */}
    {/* <img src={process.env.PUBLIC_URL + "image/a.jpeg"} alt="" width="100%" height="795"/> */}
    {/* <Images></Images> */}
    {/* <Formex></Formex> */}
    {/* <Mul_inputs/> */}
    {/* <Handling_form></Handling_form> */}
    {/* <Uncontrolled_form></Uncontrolled_form> */}
    {/* <Callbacks></Callbacks> */}
    {/* <LiftingState></LiftingState> */}
    <ContextFile></ContextFile>

    </div>
    </>
  );
}

export default App;
