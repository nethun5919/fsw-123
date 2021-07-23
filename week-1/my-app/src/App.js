import "./App.css";
import TodoList from "./TodoList";
import {todos} from "./TodoStore";





function Apps(){

return (
    <div>
    <TodoList todos = {todos}/>
     </div>
     
  );
}
      export default Apps;
