import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name="asd"
function App() {
  return (
    <>
     <Navbar title="Myapp" aboutText="About Us"/>
     {/* <Navbar></Navbar> */}
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"/>
    </div>
    </>
  );
}

export default App;
