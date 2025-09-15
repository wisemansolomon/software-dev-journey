/*
Now we need to learn something very important about creating websites. This was even the main idea JS was developed to achieve. In creating websites, we follow 3 general pattern/ideas. 

1. collect and save the data, 

2. generate HTML and/or display the data. we can generate more than one type of html at a go. we can have btn, divs, imgs, links elements etc

3. Make the website interactive - to be done sometimes together with 2.

*/

//In development, nothing stops us from using made up/ placeholder values to work around our logic so that when the actual values are collected they behave the way we intended. When we are done we remove them. It helps us test our logic. So we turn the list contents following the pattern of the date input on display. Then we go our functions to update our variables.

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


//We used forEach() as a practical example to improve our todoList.

function renderTodoList() {
	let listDisplay = document.querySelector(".list-display");
	listDisplay.innerHTML = "";

	todoList2.forEach((todoObject, index) => {
		const { name, dueDate } = todoObject; //destructure the list value
		listDisplay.innerHTML += `
        <div>${name} </div> 
        <div>${dueDate}</div> 
        <button class="delete-todo-button js-delete-todo-btn">Delete</button></>
        `;
	});

	//to modify our code and use addevent listener instead of onclick, we use queryselectorAll() to get all the buttons (which gives us a NodeList) and use loop to addeventlisteners to all
	document
		.querySelectorAll(".js-delete-todo-btn")
		.forEach((deleteButton, index) => {
			deleteButton.addEventListener("click", () => {
				todoList2.splice(index, 1);
				renderTodoList();
			});
		});
}

//here we show how we used addevent listeners to optimize our code and removed the onclick html attributes
document.querySelector('.js-add-todo-btn').addEventListener('click', () => {
    addTodoItem2();
});

//Next we want to switch up all the delete buttons. One might just say we should add a class and get the buttons onto our JS but note that what we had written is a string and the buttons do not exist explicitly but are softcoded with JS if we add todo items to our list array. So in essence we cannot add event listener to an object that does not exist yet.



//----------------------------------------//

// a more step by step approach to rendering the list item can be done this way. Attempt to use the forEach
function renderTodoList1() {
	let todoListHTML = "";
	for (let i = 0; i < todoList2.length; i++) {
		const listItem = todoList2[i]; //the value
		const htmlToDisplay = `<p>${listItem}</p>`; //the element + value
		todoListHTML += htmlToDisplay;
	}
}

