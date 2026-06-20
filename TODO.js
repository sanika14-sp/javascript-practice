let todo = JSON.parse(localStorage.getItem("todos")) || [];
let Create_todo= ()=>{
    let todoInput = document.getElementById("input_box");
    let task = todoInput.value;
    todo.push(task);
    localStorage.setItem("todos",JSON.stringify(todo));
    todoInput.value="";
    displayTodo();
}

let Delete_todo= ()=>{
    let todoDelete = document.getElementById("delete_task")
    let taskNo = (todoDelete.value)-1;
    todo.splice(taskNo,1);
    localStorage.setItem("todos",JSON.stringify(todo));
    todoDelete.value ="";
    displayTodo();
}

let displayTodo = () =>{
     let displayDiv= document.getElementById("display")
     displayDiv.innerHTML= "";

     todo.forEach((task,index)=>{
        console.log(index,task);
        let p = document.createElement("p");
        p.innerText= `${index+1}. ${task}`;
        displayDiv.appendChild(p);

     })

}
displayTodo();
