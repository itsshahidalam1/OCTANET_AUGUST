const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.onclick = resetList;
document.body.appendChild(resetButton);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;   
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');   
        });
        listItem.addEventListener('dblclick', () => {
            removeItem(listItem);
        });
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function removeItem(item) {
    taskList.removeChild(item);
}

function resetList() {
    taskList.innerHTML = '';
}