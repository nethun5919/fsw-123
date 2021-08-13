import react from "react";
// import Todo from "./Todo";


function TodoList(props) {

   
   
   
   return (
 <>
 {props.todos.map((item,index ) => {
     return (
         <div>
             <ul>
                 <li key={index}>
                  <h1><input type = "checkbox" />{item.task}</h1>
                <button onClick = {(e) => {props.deleteTodo(item.id)}}>Delete</button>
                 
                 </li>
              </ul>
             
            </div>
     )
 })} 

     </>
    );
}
  
   

   export default TodoList;