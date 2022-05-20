// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';

function App() {
  return (
   <>
   <Navbar/>
   <div className="container my-3">
     
   <Textform heading="Enter the text to analise"/>
   </div>
   </>
  );
}

export default App;
