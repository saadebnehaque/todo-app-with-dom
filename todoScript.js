const form = document.querySelector('form');
const inputElement = document.getElementById('new-task');
const incompletedUl = document.querySelector('#items')
const completedUl = document.querySelector('#completedTasks');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (inputElement.value === '') {
        return
    }
    const newTask = document.createElement('li');
    newTask.className = 'item';
    newTask.innerHTML = `  <input type="checkbox" /><label>${inputElement.value}</label>`
    incompletedUl.appendChild(newTask);
    inputElement.value = '';
})


incompletedUl.addEventListener('change', e => {

    if (e.target.type === 'checkbox') {
        const completed = e.target.closest('li');
        const completedTask = document.createElement('li');
        completedTask.className = 'item';
        completedTask.innerHTML = `${completed.querySelector('label').innerText}<button class="delete">Delete</button>`;
        completedUl.appendChild(completedTask);

        completed.remove();


    }

})



completedUl.addEventListener('click', e => {
    if (e.target.innerText.toLowerCase() === 'delete') {
        const taskItem = e.target.closest('li');
        taskItem.remove();
    }
});