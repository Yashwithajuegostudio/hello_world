import "./App.css";
import Counter from "./components/Counter";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
import Message from "./components/Message";
// import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <Message /> */}
      <Counter/>
      {/* <Greet name="Bruce" heroName="Batman">
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
     <Welcome name="Diana" heroName="Wonder Woman"/> */}
      {/* <Hello/>  */}
    </div>
  );
}

export default App;
