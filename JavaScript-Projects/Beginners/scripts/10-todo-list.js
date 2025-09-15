/*
Now we need to learn something very important about creating websites. This was even the main idea why JS was developed to achieve. In creating websites, we follow 3 general pattern/ideas. 

1. collect and save the data, 

2. generate HTML and/or display the data. we can generate more than one type of html at a go. we can have btn, divs, imgs, links etc

3. Make the website interactive - to be done later

*/

//In development, nothing stops us from using made up values to work around our logic so that when the actual values are collected they behave the way we intended. When we are done we remove them. Helps us test our logic. So we turn the list contents following the pattern of the date input on display. Then we go our functions to update our variables.

//const todoList2 = [
//	{ name: "watch tv", dueDate: "25/02/2025" },
//	{ name: "read a book", dueDate: "26/02/2025" },
//	{ name: "sleep", dueDate: "27/02/2025" },
//];
const todoList2 = JSON.parse(localStorage.getItem("todoList2")) || [];

renderTodoList();//render the collected list to 

//as we have learnt, we first collect our values.
function addTodoItem2() {
    const inputElement2 = document.querySelector(".js-todo-list2");
    const name = inputElement2.value;
    const toDoDueDate = document.querySelector(".js-todo-date");
    const dueDate = toDoDueDate.value;
    //const todoItemObject = {name: inputElement2.value, dueDate: toDoDueDate.value};
	todoList2.push({ name, dueDate}); //if objt ppty name = the varname shorthand of just use the ppty name | we pushed an object
    inputElement2.value = "";
    toDoDueDate.value = "";
    localStorage.setItem("todoList2", JSON.stringify(todoList2));
    renderTodoList();
}

//function renderTodoList() {
//	let listDisplay = document.querySelector(".list-display");
//	listDisplay.innerHTML = "";
//	for (let i = 0; i < todoList2.length; i++) {
//		//listDisplay.innerHTML += `<li>${todoList2[i]}</li>`;
//		listDisplay.innerHTML += `<p>${todoList2[i]}</p>`; //<p>${todoList2[i]}</p> is called generating the HTML. can be done in several ways but this is concise.
//	}
//}


function renderTodoList() {
	let listDisplay = document.querySelector(".list-display");
	listDisplay.innerHTML = "";
    for (let i = 0; i < todoList2.length; i++) {
        //or todoItemObject = todoList2[i];
        const { name, dueDate } = todoList2[i]; //destructure the list value
        listDisplay.innerHTML += `
        <div>${name} </div> 
        <div>${dueDate}</div> 
        <button onclick="
            todoList2.splice(${i}, 1)
            //because we are updating the list with this splice, must call the function to display updated
            renderTodoList()
        " class="delete-todo-button">Delete</button></>
        `; 
        //we used splice because we want to delete from the list onclick 
	}
}




// a more step by step approach to rendering the list item can be done this way
function renderTodoList1() {
	let todoListHTML = "";
	for (let i = 0; i < todoList2.length; i++) {
		const listItem = todoList2[i]; //the value
		const htmlToDisplay = `<p>${listItem}</p>`; //the element + value
		todoListHTML += htmlToDisplay;
	}
}

