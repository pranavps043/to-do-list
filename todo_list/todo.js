document.querySelector('#push').onclick = function() {
    // Check if the input field is empty
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter a task");
    } else {
        // Add the new task to the task list
        document.querySelector('#tasks').innerHTML += `
<div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>   
            </div>
        `;

        // Get all delete buttons and add an onclick event to each
        var current_tasks = document.querySelectorAll('.delete');
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                // Ensure the task div containing the delete button is removed
                this.closest('.task').remove();
            }
        }
        var tasks = document.querySelectorAll('.task');
        for(var i=0; i<tasks.length;i++) {
           tasks [i].onclick = function() {
            this.classList.toggle('completed');
    }

}
document.querySelector("#newtask input")
.value=""
}}