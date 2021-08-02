import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Home from './Home'
import About from './About';
import Contact from './Contact'; 

import './App.css';


function App() {
  return (
  
    <>
    <BroswerRouter>
     
     <header>
       <link to = "/Home">Home</link>
       <link to = "/About">About</link>
       <link to = "/Contact">Contact</link>
     </header>
     
     <main>
       <Swith>
         
       </Swith>
     </main>
    </>
}

export default App;
