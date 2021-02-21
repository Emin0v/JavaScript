const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListener();

function eventListener() {

    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI)
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);

}

function clearAllTodos(e) {
    if (confirm("Butun todo lari silmek isteyirsiniz?")) {
        // todoList.innerHTML= "";
        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}

function filterTodos(e) {

    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            listItem.setAttribute("style", "display:none !important")
        } else {
            listItem.setAttribute("style", "display:block !important")

        }
    })


}

function deleteTodo(e) {
    if (e.target.className === 'fa fa-remove') {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStroage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo silindi ")
    }
}

function deleteTodoFromStroage(deletetodo) {
    let todos = getTodoToStroage();

    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1);//array den deyer silme 
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI() {
    let todos = getTodoToStroage();

    todos.forEach(function (todo) {
        addTodoToUI(todo);

    });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlert("danger", "todo elave edin ");

    } else {
        if (control(newTodo)) {
            addTodoToUI(newTodo);
            addTodoToStroage(newTodo);
            showAlert("success", "todo elave olundu ");
        }
    }

    e.preventDefault();
}

function getTodoToStroage() {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    return todos;
}

function addTodoToStroage(newTodo) {

    let todos = getTodoToStroage();
    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));

}
function showAlert(type, message) {

    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;

    alert.textContent = message;

    firstCardBody.appendChild(alert);

    //setTimeout

    setTimeout(function () {
        alert.remove();
    }, 1000)

}

function control(newTodo) {
    let x = true;
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function (listItem) {
        if (listItem.textContent === newTodo) {
            showAlert("danger", "bu todo artiq movcuddur!! ");
            x = false;
        }
    });

    return x;

}

function addTodoToUI(newTodo) {

    // list item yaratma
    const listItem = document.createElement("li");
    //link yaratma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //todo liste list item elave etmek

    todoList.appendChild(listItem);

    // todoInput.value = "";
}