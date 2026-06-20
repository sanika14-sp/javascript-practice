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

     todo.forEach((index,task)=>{
        console.log(index,task);
        let p = document.createElement("p");
        p.innerText= `${index+1}.${task}`;
        displayDiv.appendChild(p);

     })

}
displayTodo();
