import { useContext } from "react";
import { GlobalContext } from "./Context";

function App() {
  const {setLang} = useContext(GlobalContext);

  return (
    <div className="buttons">
      <button className="btn" onClick={()=>{setLang('ua')}}>Українська</button>
      <button className="btn" onClick={()=>{setLang('en')}}>Англійська</button>
    </div>    
  );
}

export default App;
