import logo from './logo.svg';
import './App.css';
import Home from './home';
 import About from './about';
 import Service from './service';
 import Contact from './contact';
import Menu from'./menu';
import Counter from'./counter';
import Hooks from'./hooks';
import Hooks1 from'./hooks1';
import Student from'./student';
import {trainee,a} from'./person';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Trainees from './trainees';
import Products1 from './products1';
import Newproducts from './newproducts';
import productcard from './productcard';
import categorydd from './categorydd';
 function App() {
  return (
    <div className="App">
     {/* <Home/> 
    <About/>
     <Service/>
    <Contact/>  */}
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/service" element={<Service/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/trainees" element={<Trainees/>} /> 
    <Route path="/counter" element={<Counter/>} />
    <Route path="/hooks" element={<Hooks/>} />
    <Route path="/products1" element={<Products1/>} />
    <Route path="/newproducts1" element={<Newproducts/>} />
    <Route path="/productcard" element={<productcard/>} />
    <Route path="/categorydd" element={<categorydd/>} />

    
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;