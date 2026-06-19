let todo = JSON.parse(localStorage.getItem("todos")) || [];

let displayTodo = () =>{
     document.getElementById("display").innerHTML="";
    let d = document.createElement("d");
     displayTodo.appendchild(d);
     todo.forEach((task)=>{
      console.log(task);

    });

}
displayTodo();

let Create_todo= ()=>{
    let todoInput = document.getElementById("input_box");
    let task = todoInput.value;
    todo.push(task);
    localStorage.setItem("todos",JSON.stringify(todo));
    todoInput.value="";
}


let Delete_todo= ()=>{
    
}

