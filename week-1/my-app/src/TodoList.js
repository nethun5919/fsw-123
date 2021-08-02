import react from "react";
// import Todo from "./Todo";


function TodoList({todos, completeTodo,deleteTodo}) {

   
   
   
   return (
 <>
 {todos.map((item,index ) => {
     return (
         <div>
             <ul>
                 <li key={index}>
                  <h1><input type = "checkbox" />{item.task}</h1>
                  <input type="submit" value="Submit" /> 
                 
                 </li>
              </ul>
             
            </div>
     )
 })} 

     </>
    );
}
  
   

   export default TodoList;