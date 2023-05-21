import Home from './pages/Home';
import About from './pages/About';
import Nav from './componends/Nav';
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
<HashRouter>
 <Routes> 
<Route path="/" element={<Nav/>}> 
<Route index element={<Home />} />
 <Route path="about" element={<About/>} /> 
</Route> </Routes> 
</HashRouter>
  )
}

export default App;
