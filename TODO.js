let todo = JSON.parse(localStorage.getItem("todos")) || [];
let Create_todo= ()=>{
    let todoInput = document.getElementById("input_box");
    let task = todoInput.value;
    todo.push(task);
    localStorage.setItem("todos",JSON.stringify(todo));
    todoInput.value="";
}

let Delete_todo= ()=>{
    
}

let displayTodo = () =>{
     let displayDiv= document.getElementById("display")
     displayDiv.innerHTML= "";

     todo.forEach((task)=>{
        console.log(task);
        let p = document.createElement("p");
        p.innerText= task;
        displayDiv.appendChild(p);

     })

}
displayTodo();
