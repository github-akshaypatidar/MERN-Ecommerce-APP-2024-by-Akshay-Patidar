import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";



function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/policy" element={<Policy />}/>
    <Route path="*" element={<PageNotFound />}/>
   </Routes>
   </>
  );
}

export default App;
