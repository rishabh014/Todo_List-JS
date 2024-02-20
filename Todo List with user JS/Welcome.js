document.addEventListener("DOMContentLoaded", function () {
    // Your code to run when the DOM is ready
    displayTodos();
});
function displayTodos() {
    const userData = JSON.parse(localStorage.getItem('tempUser'));
    const existingToDos = JSON.parse(localStorage.getItem('todos'));

    // Find the todo object for the current user
    const foundObj = existingToDos.find(item => item.id === userData.userId);
    // console.log(foundObj)

    if (!foundObj) {
        alert("Data not found")
    } else {
        const todos = foundObj.todos;
        const todoList = document.getElementById("todoList")
        //clear existing list items
        todoList.innerHTML = "";
        //Iterate over each todo item
        todos.forEach(todo => {
            const todoLi = document.createElement("li")
            todoLi.textContent = todo;
            todoList.appendChild(todoLi);
        })
    }
}

function Add() {
    const todoInput = document.getElementById("todoInput").value.trim();
    if (todoInput !== "") {
        const userData = JSON.parse(localStorage.getItem('tempUser'));

        // Get existing todos from localStorage or initialize an empty array
        let existingTodos = JSON.parse(localStorage.getItem('todos')) || [];

        // Find index of user's todos in the existingTodos array    
        const index = existingTodos.findIndex(item => item.id === userData.userId);

        if (index !== -1) {
            // Add the new todoInput to the user's existing todos
            existingTodos[index].todos.push(todoInput);
        } else {
            // Create a new entry for the user if no todos exist yet
            existingTodos.push({ id: userData.userId, todos: [todoInput] });
        }

        // Update the todos in localStorage
        localStorage.setItem("todos", JSON.stringify(existingTodos));

        // Clear the input field
        document.getElementById("todoInput").value = "";
        // Creating a new list item for the added todo and appending it to the list
        const todoLi = document.createElement("li");
        todoLi.textContent = todoInput;
        document.getElementById("todoList").appendChild(todoLi);
    } else {
        alert("Please enter a todo item");
    }
}


function ClearList() {
    const todoUl = document.getElementById("todoList")
    while (todoUl.firstChild) {
        todoUl.removeChild(todoUl.firstChild)
    }
}
function LogOut() {
    setTimeout(() => {
        window.location.href = "Login.html";
    }, 1000);
}
