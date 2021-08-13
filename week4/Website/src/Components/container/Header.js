
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'

export default function Header(){
    return(<header>
            <Link exact to = "/">Home</Link>
            <Link to = "/About">About</Link>
             <Link to = "/Contact">Contact</Link>
            </header>
        )
}






