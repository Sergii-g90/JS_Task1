// Define UI Vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')
let test = 'text'
console.log((test))

// Load all event listeners
loadEventListeners()

// Load all event listeners
function loadEventListeners () {
  // Add task event
  form.addEventListener('submit', addTask)
}

// Add tasks
function addTask (e) {
  if (taskInput.value === '') {
    alert('Add a task')
  }
  else {
    //Create li element
    const li = document.createElement('li')
    li.className = 'collection-item'
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value))
    //create new link element
    const link = document.createElement('a')
    //Add class
    link.className = 'delete-item secondary-content'
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //Append the link to li
    li.appendChild(link)
    //Append li to ul
    taskList.appendChild(li)

    //clear input
    taskInput.value = ''
  }
  e.preventDefault()
}
