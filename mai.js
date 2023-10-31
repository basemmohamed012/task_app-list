const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span>
                    <button onclick="editTask(this)">Edit</button>
                    <button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
}


function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}


function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector("span");
    const newTaskText = prompt("Edit the task:", span.textContent);
    if (newTaskText !== null) {
        span.textContent = newTaskText;
    }
}


function saveData() {
    const tasks = [];
    const taskElements = taskList.querySelectorAll("li");
    taskElements.forEach((taskElement) => {
        const taskText = taskElement.querySelector("span").textContent;
        tasks.push(taskText);
    });

}


function loadData() {
   
}


loadData();