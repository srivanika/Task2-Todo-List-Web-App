


const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    span.addEventListener("click", function() {
        span.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});

