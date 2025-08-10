document.getElementById("btn-1").addEventListener('click', function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    // button disabled
    this.disabled = true;
    const task = completedTask("task-number");
    const currentTask = document.getElementById("task-number").innerText = task;
    const active = activeTasks("active-task");
    const currentActive = document.getElementById("active-task").innerText = active;
    // added activity history
    const container = document.getElementById("history-container");
    const div = document.createElement("div");
    const title1 = document.getElementById("title-1").innerText;
    div.classList.add("bg-green-200", "p-2", "mt-2", "items-center", "rounded-lg")
    div.innerHTML = `
    <p>You have completed the tasks ${title1} <span id="times"></span></p>
    `
    container.appendChild(div);
    // get current time;
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    // show current time
    document.getElementById("times").textContent = `
    at ${hours}:${minutes}:${seconds}
    `;
    // condition
    const current = update("task-number");
    if (current === 0) {
        alert("Congrates!!! You have completed all the tasks.")
    }

    
    
})
document.getElementById("btn-2").addEventListener('click', function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    // button disabled
    this.disabled = true;
    const task = completedTask("task-number");
    const currentTask = document.getElementById("task-number").innerText = task;
    const active = activeTasks("active-task");
    const currentActive = document.getElementById("active-task").innerText = active;
    // added activity history
    const container = document.getElementById("history-container");
    const div = document.createElement("div");
    const title2 = document.getElementById("title-2").innerText;
    div.classList.add("bg-green-200", "p-2", "mt-2", "items-center", "rounded-lg")
    div.innerHTML = `
    <p>You have completed the tasks ${title2} <span id="times-2"></span></p>
    `
    container.appendChild(div);
    // get current time;
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    // show current time
    document.getElementById("times-2").textContent = `
    at ${hours}:${minutes}:${seconds}
    `;
    // condition
    const current = update("task-number");
    if (current === 0) {
        alert("Congrates!!! You have completed all the tasks.")
    }
})
document.getElementById("btn-3").addEventListener('click', function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    // button disabled
    this.disabled = true;
    const task = completedTask("task-number");
    const currentTask = document.getElementById("task-number").innerText = task;
    const active = activeTasks("active-task");
    const currentActive = document.getElementById("active-task").innerText = active;
    // added activity history
    const container = document.getElementById("history-container");
    const div = document.createElement("div");
    const title3 = document.getElementById("title-3").innerText;
    div.classList.add("bg-green-200", "p-2", "mt-2", "items-center", "rounded-lg")
    div.innerHTML = `
    <p>You have completed the tasks ${title3} <span id="times-3"></span></p>
    `
    container.appendChild(div);
    // get current time;
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    // show current time
    document.getElementById("times-3").textContent = `
    at ${hours}:${minutes}:${seconds}
    `;
    // condition
    const current = update("task-number");
    if (current === 0) {
        alert("Congrates!!! You have completed all the tasks.")
    }
})
document.getElementById("btn-4").addEventListener('click', function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    // button disabled
    this.disabled = true;
    const task = completedTask("task-number");
    const currentTask = document.getElementById("task-number").innerText = task;
    const active = activeTasks("active-task");
    const currentActive = document.getElementById("active-task").innerText = active;
    // added activity history
    const container = document.getElementById("history-container");
    const div = document.createElement("div");
    const title4 = document.getElementById("title-4").innerText;
    div.classList.add("bg-green-200", "p-2", "mt-2", "items-center", "rounded-lg")
    div.innerHTML = `
    <p>You have completed the tasks ${title4} <span id="times-4"></span></p>
    `
    container.appendChild(div);
    // get current time;
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    // show current time
    document.getElementById("times-4").textContent = `
    at ${hours}:${minutes}:${seconds}
    `;
    // condition
    const current = update("task-number");
    if (current === 0) {
        alert("Congrates!!! You have completed all the tasks.")
    }
})
document.getElementById("btn-5").addEventListener('click', function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    // button disabled
    this.disabled = true;
    const task = completedTask("task-number");
    const currentTask = document.getElementById("task-number").innerText = task;
    const active = activeTasks("active-task");
    const currentActive = document.getElementById("active-task").innerText = active;
    // added activity history
    const container = document.getElementById("history-container");
    const div = document.createElement("div");
    const title5 = document.getElementById("title-5").innerText;
    div.classList.add("bg-green-200", "p-2", "mt-2", "items-center", "rounded-lg")
    div.innerHTML = `
    <p>You have completed the tasks ${title5} <span id="times-5"></span></p>
    `
    container.appendChild(div);
    // get current time;
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    // show current time
    document.getElementById("times-5").textContent = `
    at ${hours}:${minutes}:${seconds}
    `;
    // conditon
    const current = update("task-number");
    if (current === 0) {
        alert("Congrates!!! You have completed all the tasks.")
    }
})
document.getElementById("btn-6").addEventListener('click', function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    // button disabled
    this.disabled = true;
    const task = completedTask("task-number");
    const currentTask = document.getElementById("task-number").innerText = task;
    const active = activeTasks("active-task");
    const currentActive = document.getElementById("active-task").innerText = active;
    // added activity history
    const container = document.getElementById("history-container");
    const div = document.createElement("div");
    const title6 = document.getElementById("title-6").innerText;
    div.classList.add("bg-green-200", "p-2", "mt-2", "items-center", "rounded-lg")
    div.innerHTML = `
    <p>You have completed the tasks ${title6} <span id="times-6"></span></p>
    `
    container.appendChild(div);
    // get current time;
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    // show current time
    document.getElementById("times-6").textContent = `
    at ${hours}:${minutes}:${seconds}
    `;
    // condition
    const current = update("task-number");
    if (current === 0) {
        alert("Congrates!!! You have completed all the tasks.")
    }
})

// Clear Active History
document.getElementById("clearhistory-btn").addEventListener("click",function(){
    document.getElementById("history-container").innerHTML= '';
})

// Random Background Color
document.getElementById("colorBtn").addEventListener("click",function(){
    document.body.style.backgroundColor= getRandomColor();
})

// Discover today button
document.getElementById("discover-btn").addEventListener("click", function(){
    window.location.href= "blog.html";
})


