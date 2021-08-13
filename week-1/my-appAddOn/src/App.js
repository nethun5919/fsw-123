import "./App.css";
import TodoList from "./TodoList";
import todo from "./TodoStore";
import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";

function App(){

  const [todos, setTodos] = useState(todo);
  const [input, setInput] = useState("");


function addItem(e){
  e.preventDefault()
  setTodos([...todos, {
    id: uuidv4(),
    task:input,
    isComplete: true

}])
}

function completeTodo (id) {
 
  setTodos(
    todos.map(todo => {
      if (todo.id === id ) {
        return{
          ...todo,
          isCompleted: todo.isCompleted?false:true
        
        }
      }else{
        return (todo)
      }
        
      
    }


  ))};
        function deleteTodo(id){
setTodos(todos.filter(todo => todo.id !== id));
 }
                 return  (
    <div>
      <form onSubmit={addItem}>
                 <input
                 placeholder="Task"
              // ref={props.inputElement}
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
              }}/>
                  <input type="submit" value="Submit" /> </form>

    <TodoList todos = {todos} 
    completeTodo = {completeTodo} 
    deleteTodo = {deleteTodo}
    />
    
     </div>
     
)
  


}    
   

;       

export default App;
