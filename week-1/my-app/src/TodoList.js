


function TodoList({todos}) {

    return (
 <>
 {todos.map((item,index ) => {
     return (
         <div>
             <ul>
                 <li key={index}>
                  <h1><input type = "checkbox"/>{item.text}</h1> 
               
                 </li>
              </ul>
             
             
         </div>
     )
 })} 

     </>
    );
}
  
   

   export default TodoList;