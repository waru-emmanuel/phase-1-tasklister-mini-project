
document.addEventListener("DOMContentLoaded", () => { //ensures that the JavaScript code executes after the HTML content has been parsed
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
//retrieves references to '(taskForm)' and  '(taskList)' using document.getElementById()
const prioritySelect = document.getElementById("priority-select");
//
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskItem.classList.add(priority);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.addEventListener("click", () => {
        taskItem.remove();
      });

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  });
  
  const sortTasks = () => {
    const tasks = Array.from(taskList.children);
    tasks.sort((a, b) => {
      return prioritySelect.value === "high"
        ? b.classList.contains("high") - a.classList.contains("high")
        : a.classList.contains("high") - b.classList.contains("high");
    });

    taskList.innerHTML = "";
    tasks.forEach((task) => {
      taskList.appendChild(task);
    });
  };

  prioritySelect.addEventListener("change", sortTasks);


});



/*when the form is submitted (taskForm.addEventListener("submit", (event) => { ... });),This happens:
The default form submission behavior is prevented using event.preventDefault() to prevent the page from refreshing.

-It retrieves the value entered in the task description input field (taskInput) and trims any leading or trailing whitespace.
-If the trimmed task description is not empty, it creates a new list item (taskItem) containing the task description text.
-It creates a delete button (deleteButton) with the "❌" symbol to allow users to delete the task.
-It adds an event listener to the delete button to remove the task item from the list when clicked.
-It appends the delete button to the task item and appends the task item to the list of tasks.
-Finally, it resets the value of the task description input field to an empty string.

Some further additions:
-Added a 'classList.add()' method to add the selected priority level as a class to the task item. This class will be used to determine the color of the text in the list.

-Implemented a sortTasks() function to sort tasks based on priority. This function is triggered whenever the priority dropdown selection changes.

-Updated the event listener for the priority dropdown (prioritySelect.addEventListener("change", sortTasks);) to call the sortTasks() function.
*/
