In JS, the concept of "context" refers to the value of the "this" keyword within a function.

The "this" keyword is a special variable (we have no say) that is automatically defined in the scope of every function, and its value depends on how the function is called. 

Understanding "this" is crucial because it determines which object the function is operating on. So when we talk/think about 'this', always think about it bearing in mind it has a very close relationship with functions.

By the above, we are saying that all the functions we run when we call them are run within a context. Why?, because we learnt that everything in JS language is designed as objects, in a hierarchical format where some are the topmost and others are sub. Js is a language if the web and was desined with the web in mind. 

The window object, also known as the global, is the top-most object in the browser. It represents the browser window and provides access to various properties, methods, and functions. Every other browser object is within it. It reps what we see when we open a browser. Recall, the engine/environment atht runs JS is built into a browser. 

Some common Properties and methods of the window object are below. We might notice that when we learnt about dom, the document there is an attribute of window but because it is actually bogus to always write window.document, that is why it is shortened to document. etc. We have window.location, window.seTimeout(), window.alert(), window.document, window.navigator. All have its uses, e.g, window.document provides access to the HTML document.

(Note: calling a function and invoking a function are used interchangeably but invoking is broader in that it refers to the act of executing a function, regardless of how it is executed e.g by calling: using a function name followed by parentheses, by using a function as a constructor: using the new myConstructor(), using a function as a method:ie calling a function as a property of an object, or by using a function as a callback: passing a function as an argument to another function, which then executes it.) In any of the instances where we do not call a function, it is some other agane that is calling that function and to us, we say the function in general is being invoked. A callback function is called by the function that takes the callback, not us. Think of us as functions that can write and call our own functions ...sort of thought experiment.

## What is "this"
* So 'this' refers to the object that the function is bound to when it is invoked. 

* The value of 'this' is not determined by where the function is defined, but by how the function is called. Or better put, the value of 'this' is determined by the call site, not by the function's definition. Meaning, we cannot fix the value of 'this' when we define any function, although there is an inherent 'this', but the 'this' value manifests itself when and how the function is called.

## The different contexts in JS
(a) Global Context: When a function is called in the global scope (not as a method of an object that is below in hierarchy to the topmost object), 'this' for that function will refer to the global object; Since we write our code mostly from the global scope, we call the functions directly and it runs correctly. 
    * In browsers, it is 'window'
    * In Node.js, it is 'global'.

function  sayHello() {
    console.log(this);
}
sayHello();

(b) Object Method Context: When a function is called as a method of an object, 'this' refers to the object that owns the method. Meaning it is the object that calls the function

const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, ${this.name}` )
    }
}
person.greet() //Hello Alice.


(c) The constructor Context: When a function is used as a constructor (with the 'new' keyword), 'this' refers to the newly created instance of the object. Recall that a function is used for some purpose and a constructor being one of them.

function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log (`Hello, ${this.name})
    }
}

const alice = new Person('Alice);
alice.greet();

(d) Event Handler Context: In an event handler (An event handler is any function/block of code that is written with the intent that it is the code you want executed in response to specific event we as developers are targetting e.g user interaction like clicks, hover, system events like page loads, errors, timer events etc, network events like Ajax requests, WebSocket messages. Event handlers can be inline ie defined directly on HTML elements. or scripted ie defined in JS code file.) The event handler consist of the HTML element that listens through which the event is listened, the event type, and the event listener - short for event listener function.

    So in an event handler, 'this' associated with that event handler's event listener refers to the element that triggered the event. Meaning it is the element that does the function call.

<button id="myButton">Click<button>
<script>
    document.getElementById('myButton').addEventListener('click', ()=> {
        console.log(this)
    })
</script>

So in summary, for every function, if the right 'this' object is not the one doing the calling, the function will not behave correctly. Hence for cases like addEventListeners, we would if we do not knoe better, we can just use any pre-written global function as its callback but and be surprised when it does not work correctly. It is therefore safe to wrap use an arrow function as its callback and within it, we can call any type of function we want within its right context, meaning that the event listener button calls the callback function whose job is to execute any code within it be it a function or lines of logic.

(e) Explicit Context (using 'call', 'apply' or 'bind'): We can explicitly setthe value of 'this' using: 
    * call(): calls a function with specific 'this' value and argumemnts provided individually.
    * apply(): calls a function with a specific 'this' value and arguments provided as an array.
    * bind(): creates a new function with a specific 'this' value which cannot be changed later.


Think of it like this, We start off every program inside the global object. If we go by rules, if i create a variable in the flobal space and i want to access it in a function I want to write, i should write, this.variable_name, and it anyone were to want to access that  outside the global object, if we have something like that, it will be window.variable_name. But because we are all in the global object, we are on a first name basis, no need for that. We obey this rule in sub objects though.

Why so? Because variables are essentially attributes of the global object and functions are methods of the global object, But like we said earlier, functions are not called in vacuum, they are called within objects, the object on which it is called on is the object it is bound to. Fot this reason, developers are careful to ensure that they bound any function they want to call to the correct object otherwise the function will malfunction ie, it will do the calling but the outcome may not be what we want. For example, if we write a function in the context of the global object that plays a game and then we call that function in the context of a lower object, this for global will not match this for the object therefore even the variables etc used in the global will be undefined in the object. We see something like this in addEventListeners