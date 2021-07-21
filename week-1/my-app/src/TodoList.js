


function TodoList({todos}) {

    return (
 <>
 {todos.map((item,index ) => {
     return (
         <div>
             <ul>
                 <li key={index}>
                   <h1> {item.text}</h1> 
                   <input type = "checkbox"/>
                 </li>
             </ul>
         </div>
     )
 })} 

     </>
    );
}
  
   

   export default TodoList;