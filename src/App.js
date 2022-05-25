import './App.css';
 import Greet from './components/Greet';
 import Welcome  from './components/Welcome';
// import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
     <Greet name="Bruce" heroName="Batman">
       <p>This is a childern</p>
     </Greet>
     <Greet name="Clark" heroName="Superman">
       <button>Action</button>
     </Greet>
     <Greet name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Clark" heroName="Superman">
       <button>Action</button>
     </Welcome>
     <Welcome name="Diana" heroName="Wonder Woman"/>
     {/* <Hello/>  */}
    </div>
  );
}

export default App;
