
import Home from "./pages/Home/Home";
import { Route , Routes } from "react-router-dom";
import AboutUs from "./pages/aboutus/AboutUs";
import Article1 from "./pages/article/Article1";

function App() {
  return (
    <div  >
   <Routes>
    <Route path ="/" element ={<Home/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/article/:id" element={<Article1/>}/>
   </Routes>
    
      </div>
       
      
  
  
  );
}

export default App