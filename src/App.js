import Home from './pages/Home';
import About from './pages/About';
import Nav from './componends/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
<BrowserRouter>
 <Routes> 
<Route path="/" element={<Nav/>}> 
<Route index element={<Home />} />
 <Route path="about" element={<About/>} /> 
</Route> </Routes> 
</BrowserRouter>
  )
}

export default App;
