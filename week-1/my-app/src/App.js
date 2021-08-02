import "./App.css";
import TodoList from "./TodoList";
import todo from "./TodoStore";
import React, {useState} from "react";


function App(){

  const [todos, setTodos] = useState(todo);


function completeTodo (id) {
 
  setTodos(
    todos.map(todo => {
      if (todo.id === id ) {
        return{
          ...todo,
          isCompleted: todo.isCompleted?false:true
        
        }
      }
    }


  ))};
        function deleteTodo(id){
setTodos(todos.filter(todo => todo.id !== id));
 }
                 return  (
    <div>
    <TodoList todos = {todos} 
    completeTodo = {completeTodo} 
    deleteTodo = {deleteTodo}
    />
    
     </div>
     
)
  


}    
   

;       

export default App;
