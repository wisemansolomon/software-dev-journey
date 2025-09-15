/*
Now we need to learn something very important about creating websites. This was even the main idea why JS was developed to achieve. In creating websites, we follow 3 general pattern. 

1. collect and save the data, 

2. generate HTML and/or display the data. we can generate more than one type of html at a go. we can have btn

3. Make the website interactive - to be done later

*/

const todoList = [];

//element collected into JS is an object
function addTodoItem() {
	const inputElement = document.querySelector(".js-todo-list1");
	todoList.push(inputElement.value);
	console.log(todoList);
	inputElement.value = "";
}

//In development, nothing stops us from using made up values to work around our logic so that when the actual values are collected they behave the way we intended. When we are done we remove them. Helps us test our logic. So we turn the list contents following the pattern of the date input on display. Then we go our functions to update our variables.

const todoList2 = [
	{ name: "watch tv", dueDate: "25/02/2025" },
	{ name: "read a book", dueDate: "26/02/2025" },
	{ name: "sleep", dueDate: "27/02/2025" },
];

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

//1.final version of the generating html.
//2. After converting our entries to object, as we loop we must access the object properties. Can use dot notation or we can destruct the object
function renderTodoList() {
	let listDisplay = document.querySelector(".list-display");
	listDisplay.innerHTML = "";
    for (let i = 0; i < todoList2.length; i++) {
        //or todoItemObject = todoList2[i];
        const { name, dueDate } = todoList2[i]
        //can see that within the temp string, we passed elements, expressions, text nodes, onclick treats its values as js code. Also see how we wrapped each var in a div giving then their own element style them
        listDisplay.innerHTML += `
        <div>${name} </div> 
        <div>${dueDate}</div> 
        <button onclick="
            todoList2.splice(${i}, 1)
            //because we are updating the list with this splice, must call the function to display updated
            renderTodoList()
        " class="delete-todo-button">Delete</button></>
        `; 
	}
}

// a more step by step approach to rendering the list item can be done this way
function renderTodoList1() {
	let todoListHTML = "";
	for (let i = 0; i < todoList2.length; i++) {
		const listItem = todoList2[i];
		const htmlToDisplay = `<p>${listItem}</p>`;
		todoListHTML += htmlToDisplay;
	}
}

//Anything we code using dom is softcoded into the browser. When we refresh, they might not be there but they make the browser dynamic. Think of it as a front-end and backend of some sort. imagine we have a list we hardcoded backend, if we want to add to it, we can if from the page and when we display the container, all the items will be there both hardcoded and collected using dom. So basically we can hardcode and softcode anything including elements, values and variables and element + string + variable mixtures. Always remember that in programming, += is incrementing for numerical values and concatenation/continuation for strings. Even as i type, behind the scene it is += that is being used to add the characters to the string digitally. Writing with our pen is similar. The paper is the variable, we are just incrementing one character at a time. Above example <p> is just a way to add the data on different lines. We can also use <li> while the <div> element is our paper.


//to make the final version of the project which is to have an input field for todo item, next to it would be another input field of type date and next to it the add button. Recall we only had input add btn. And when we display the todo item it has the date and a button to delete it from the list. The delete button will not be hardcoded so we must use JS to add it and also make it interactive at the same time