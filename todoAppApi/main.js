let todos = [];
function addTodo(val){
    fetch('https://my-json-server.typicode.com/techplatform/todo-api/todos', {
    method: 'POST',
    body: JSON.stringify({
        id: 4,
        text: val,
        comp: false,
        }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
        todos.push(json)
        getList(todos);
    });
}

fetch('https://my-json-server.typicode.com/techplatform/todo-api/todos')
  .then(response => response.json())
  .then((json) => {
    todos = json;
    getList(todos);
  })
  

const addBtn = document.getElementById("add");
document.getElementById('clear').addEventListener('click', clear);

addBtn.addEventListener('click', add);

// let todos = [{
//     id: 1,
//     text: "eggs",
//     comp: false,
// }, {
//     id: 2,
//     text: "milk",
//     comp: false,
// }, {
//     id: 3,
//     text: "yogurt",
//     comp: false,
// }];

function add(){
    const inputElement = document.getElementById("todoInput").value;
    const inputValue = inputElement;
    console.log(inputValue);
    addTodo(inputValue);
    // todos.push({
    //     id: todos.length + 1,
    //     text: inputValue,
    //     comp: false,
    // });
    console.log(todos);
    inputElement.value = "";
    getList(todos);
};


function getList(todosArray){
    let list = ``;
    // for(let i=0; i<todos.length; i++){
    //     list = list + `<li>${todos[i]}</li>`
    // }
    todosArray.forEach((todo)=>{
        list = list + `<li data-id="${todo.id}" class="${todo.comp ? "comp" : "notcomp"}">${todo.text}<button data-id="${todo.id}">Edit</button> <button data-id="${todo.id}">Delete</button></li>`
    });

    document.getElementById('todoList').innerHTML = list;
} 



document.body.addEventListener('click', (e)=> {
    if(e.target.tagName === "LI"){
       const id=e.target.getAttribute("data-id");
        todos = todos.map((item) => {
            if(item.id == id){
                item.comp = true;
                return item;
            }
            else{
                return item;
            }
        });
        getList(todos);
    }
    else if(e.target.tagName === "BUTTON"){
        const id= e.target.getAttribute("data-id");
        if(e.target.innerHTML === "Edit"){
            // console.log(e.target.parentElement.childNodes[0])
            // const editVal = e.target.parentElement.childNodes[0]
            //console.log(toString(editVal).replace(/\s+/g, '').trim());
            const editArrayItem = todos.filter((item) => {
                if (item.id == id){
                    return item;
                }
            });
            const editVal = editArrayItem[0].text;
            // console.log(editVal);
            document.getElementById("inputSection").innerHTML = `<input type="text" id="todoUpdateInput" value="${editVal}"/>
            <button id="upDate">Update</button>`

            const todoUpdateInput= document.getElementById("todoUpdateInput")
            const updateBtn = document.getElementById('upDate')

            updateBtn.addEventListener('click', function () {
                todos = todos.map((item)=>{
                    if(item.id == id) {
                        item.text = todoUpdateInput.value;
                        return item;
                       }
                       else{
                        return item;
                       }
                });
               console.log(todos);
            });
        } 
        
        else if(e.target.innerHTML === "Delete") {
            todos = todos.filter((item) => {
                console.log(item.id == id);
                if(item.id == id) {
                } else {
                    return item;
                }
            });
        } 
        
        getList(todos);
    }
    else{
        console.log("not clicked")
    }
});

function clear(e) {
    document.querySelector('ul').innerHTML='';
}

