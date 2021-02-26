const addBtn= document.getElementById('add');
const clearBtn= document.getElementById('clear');
const displayArea= document.getElementById('display');
const work= document.getElementById('work');

showValue();

// To show a value
function showValue() {
    let webTask= localStorage.getItem('localtask');
    if (webTask == null) {
        taskObj= [];
    } else {
        taskObj= JSON.parse(webTask);
    }

    let html='';

    taskObj.forEach((item, index) => {
        html+= `<li>${index+1}. ${item}<i class="fas fa-trash" onclick="remove(${index})"></i></li>`;
    });
    displayArea.innerHTML= html;
}

// To add a task
function addTask() {
    let userEnteredValue= work.value;
    if (userEnteredValue.trim() !=0) {
        let webTask= localStorage.getItem('localtask');
        if (webTask == null) {
            taskObj= [];
        } else {
            taskObj= JSON.parse(webTask);
        }

        taskObj.push(userEnteredValue);
        localStorage.setItem('localtask', JSON.stringify(taskObj));
    }

    showValue();
}

// To delete single task
function remove(index) {
    let webTask= localStorage.getItem('localtask');
    let taskObj= JSON.parse(webTask);
    taskObj.splice(index, 1);
    localStorage.setItem('localtask', JSON.stringify(taskObj));

    showValue();
}

// To remove all task
function clearAll() {
    let webTask= localStorage.getItem('localtask');
    let taskObj= JSON.parse(webTask);
    if (webTask == null) {
        taskObj= [];
    } else {
        taskObj= JSON.parse(webTask);
        taskObj= [];
    }
    
    localStorage.setItem('localtask', JSON.stringify(taskObj));
    showValue();
}

// Event Listeners
addBtn.addEventListener('click', addTask);
clearBtn.addEventListener('click', clearAll);