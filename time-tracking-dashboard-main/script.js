const tableEl = document.querySelector('.table');
const timeListEl = document.querySelectorAll('.time li');

const createTodoEl = (title, hrs, prvhrs) => {
    let todoClass = title.toLowerCase();

    if (title === 'Self Care') {
        todoClass = 'selfcare';
    }

    const todoEl = document.createElement('div');
    todoEl.classList.add(todoClass);
    todoEl.innerHTML = `
            <div class="todo">
                <span class="header">${title}</span>
                <img src="./images/icon-ellipsis.svg" alt="todo menu" class="menu">
            </div>
            <div class="stats">
                <p class="hrs">${hrs}hrs</p>
                <p class="prv-hrs">Last Week - ${prvhrs}hrs</p>
            </div>
        `;
    return todoEl;
};

const onPageLoad = data => {
    data.forEach(todo => {
        tableEl.appendChild(createTodoEl(todo.title, todo.timeframes.daily.current, todo.timeframes.daily.previous));
    });
};

try {
    fetch('./data.json')
        .then(res => {
            if (res.status !== 200) {
                throw new Error('Server is out for a coffee! : )')
            }

            return res.json();
        })
        .then(todos => {
            onPageLoad(todos);

            timeListEl.forEach(li => {
                li.addEventListener('click', () => {
                    [...tableEl.children].forEach((child, i) => {
                        if (i > 1) {
                            child.remove();
                        }
                    });
            
                    todos.forEach(todo => {
                        let currentHrs;
                        let previousHrs;
            
                        if (li.id === 'dly') {
                            currentHrs = todo.timeframes.daily.current;
                            previousHrs = todo.timeframes.daily.previous;
                        } else if (li.id === 'wly') {
                            currentHrs = todo.timeframes.weekly.current;
                            previousHrs = todo.timeframes.weekly.previous;
                        } else if (li.id === 'mly') {
                            currentHrs = todo.timeframes.monthly.current;
                            previousHrs = todo.timeframes.monthly.previous;
                        }
                        tableEl.appendChild(createTodoEl(todo.title, currentHrs, previousHrs));
                    });
                });
            });
        })
} catch(err) {
    console.log(err);
    throw new Error('Oops! Something went wrong...: (')
};