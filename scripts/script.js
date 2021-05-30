

//Selectors
const toDoButton=document.querySelector('.todo-button');
const toDoInput=document.querySelector('.todo-input');
const toDoList=document.querySelector('.todo-list');



//Eventlisnters

toDoButton.addEventListener("click",(event)=>{
  
    event.preventDefault();
    
    if(toDoInput.value.length===0)
    {
       
        alert("Please Enter Item Name");
    }
    else{
        addTodoList();
    }
   
})

toDoList.addEventListener("click",deleteCheck);

//Functions

function addTodoList()
{
   const todo=document.createElement('div');
   todo.className="todo";
//    todo.className="testdiv";
//    todo.innerText="haii";
    const todoItem=document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerText=toDoInput.value;
    todo.appendChild(todoItem);

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-clipboard-check"></i>';
    completedButton.classList.add('completed-btn')
    todo.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add('trash-btn')
    todo.appendChild(trashButton);
 

    toDoList.appendChild(todo);
   toDoInput.value="";

}

function deleteCheck(e)
{
    e.preventDefault();
 const item=e.target
    console.log(e.target);
    if(item.classList[0]==="trash-btn")
    {
        const todo=item.parentElement;
        todo.classList.add("fall");
    //  item.parentElement.remove();
    // alert(item.parentElement);
    todo.addEventListener("transitionend",function(){
        todo.remove();
    })
   

    }
    

    
}

// 38:28