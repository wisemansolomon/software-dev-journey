# LOGIC
I think logic is how we evaluate every situation and come to a decision. In the same vein, programming is about writing logic for a computer. We are helping the computer to evaluate situation and decide on a course or course of action.

Real world programs are not just small files that we write and run on a terminal etc, they are deployed to enterprose infrastructures and they become alive listening to internal/external logic to determine the set of programs to execute. 

# The concept of flags
Remember when we learnt loops, we learnt of loop variable, loop condition and a counter for the loop variable - All that was necessary because a loop is a type of program that allows us repeat a process. A loop variable combined with a loop condition is used to control the flow of a loop, ie how many times, and other logic we might want to execute as we loop through an iterable. A flag, on the other hand can be thought of as used for controlling the flow of a program (e.g program within program), make decisions, track the state of something or a combination of any of these three. Often we use flags in conditional statements (eg, if statements) to determine if a certain action should be taken. Take our TV remotes that on/off. It works based if a certain flag is off, then run the on function, and if flag is on, run the put tv off function. WIthout a flag, we may not be able to track the state of the flag and therefore also track the state of our program. 

Also, we need to bear in mind that the computer has no concience/emotion/sentiment. Everything is an instruction and there is no sentiment on how code is read. Every line is read on its own merit. If I write a value 5 in line 1, in line 2, if I write 5, both values are read but they are not compared logcally by the computer unless told to do so. If a variable holds true on line 1 and in line 2, i say same variable to hold false, the computer does not care. It just follows the instruction as we coded it. Most of the programs we write will be in a state of waiting until an event happens like click etc via dom or flag. It is the human that knows what it wants to do. An if statement's condition is essentially saying, if condition evaluates to true do somethinh and if not, something else. What I use as condition must not even be related, it just have to be able to evaluate to true/false.


Another conceptualization I want to explain is the concept of logical NOT operator. It is actually easy to understand.

Suppose we have

let isPlaying = false

if(!isplaying) {
    //run some code
}