import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alertfun from "./Components/Buttompage/Alertfun";
import Buttom from "./Components/Buttompage/Buttom";
import Collect from "./Components/Buttompage/Collect";
import SignIn from "./Components/Buttompage/SignIn";
import Home from "./Components/Home/Home";


function App() {
  return (
  <div>
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/:Buttom" element={<Collect/>}></Route>
<Route path="/:create" element={<SignIn/>}></Route>
<Route path="/:order" element={<Alertfun/>}></Route>
</Routes>


</BrowserRouter>



</div>
    
  );
}

export default App;
