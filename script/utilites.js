
function completedTask(task){
    const value= document.getElementById(task).innerText;
    const convertedValue = parseInt(value);
    const subtraction = convertedValue - 1;
    return subtraction;
}
function activeTasks(current){
    const value2= document.getElementById(current).innerText;
    const convertedValue2 = parseInt(value2);
    const sum = convertedValue2 + 1;
    return sum;
}
function update(task){
    const value= document.getElementById(task).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

// Random color genarate korar function
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i= 0; i<6; i++){
        color+= letters[Math.floor(Math.random()*16)];
    }
    return color;
};


