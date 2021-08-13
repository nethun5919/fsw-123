import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Home from './../pages/Home';
import About from './../pages/About';
import Post from './../pages/Post';
import Contact from './../pages/Contact';
export default function Body(){
    return(
      <main>
       <Switch>
          <Route exact path ="/">
         <Home/>
         </Route>
        <Route path = "/about">
            <About/>
           </Route>
           <Route path = "/contact">
            <Contact/>
            </Route>
             <Route path = "/post">
           <Post/>
             </Route>
            </Switch>
              </main>
        )
}