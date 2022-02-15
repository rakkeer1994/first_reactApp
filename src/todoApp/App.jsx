import Component from "./Component";
import Compo1 from "./Compo1";
import Circle from "./Circle";

function App(){
   return (
       <>
       <h1>this is my second component imported in single app = {Compo1}</h1>;
       <h2>this is circle = {Component}</h2>
       {Circle()}
       </>
   ) 

}

export default App;