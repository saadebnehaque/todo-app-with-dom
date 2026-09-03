/* const input = document.getElementById('new-task');
const headerElement = document.getElementById('addTask')
const parent = document.querySelector('#todo-list')
headerElement.addEventListener('focus', (e) => {
    const divElement = document.createElement('div');
    console.log(e.target.value)
    divElement.innerHTML = `<h1>${input.value}</h1>`
    parent.append(divElement)
    // console.log(headerElement);
}) */



// const formElement = document.querySelector('.new-task-container');
// const inputElement = document.getElementById("new-task");
// const parent = document.getElementById('items');

// formElement.addEventListener('submit', e => {
//     e.preventDefault()
//     if (inputElement.value === '') {
//         return
//     }
//     const liElement = document.createElement('li');
//     liElement.className = 'item';
//     liElement.innerHTML = ` <input type="checkbox" /><label>${inputElement.value}</label>`;
//     parent.append(liElement);
//     inputElement.value = '';
// })

// const incompleteTasks = document.querySelectorAll('input[type="checkbox"');
// const completedTasks = document.getElementById('completedTasks');

// console.log(completedTasks);


// incompleteTasks.forEach(incompleteTask => {
//     incompleteTask.addEventListener('change', e => {
//         const listItem = e.target.closest('li');

//         const completedListItem = document.createElement('li');
//         completedListItem.innerHTML = ``
//         listItem.remove()
//     })
//     console.log(incompleteTask);
// })