import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Header from  "../container/Header";
import Body from  "../container/Body";

function App() {
  return (
  
     <div>
     <BrowserRouter>
      <Header/>
      <Body/>
   
            </BrowserRouter>

     </div>
          
  );
}         

export default App;
