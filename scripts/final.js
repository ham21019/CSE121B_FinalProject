/* 
Instructor: Bro. Blazzard
Class: CSE121B
Semester: Spring 2022
Student: Mark Hammer
email: ham21019@byui.edu
Assignment: Final Project

Research Sites:
    https://www.codecademy.com/resources/blog/javascript-projects-for-beginners/    
    https://www.interviewbit.com/blog/javascript-projects/
    https://jsbeginners.com/
    https://blog.boot.dev/javascript/javascript-projects-for-beginners/
*/

// create variables
const button = document.querySelector("#button");
const audio = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3");

// array of dadJokes
const dadJokes = [
    {
        joke: "Q: How do you kill a blue elephant?\nA: With a blue elephant gun.",
        source: "My dad"
    },
    {
        joke: "Q: Why do elephants paint their toenails red?\nA: So they can hide in cherry trees.",
        source: "My dad"
    },
    {
        joke: "Q: Why did the football coach go to the bank?\nA: To get his quarter back.",
        source: "https://www.thepioneerwoman.com/home-lifestyle/a35617884/best-dad-jokes/"
    },
    {
        joke: "Q: What is Forrest Gump's password?\nA:1forrest1",
        source: "https://www.thepioneerwoman.com/home-lifestyle/a35617884/best-dad-jokes/"
    }
];

// perform action
button.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * dadJokes.length);
    console.log(`The random number chosen was ${randomNumber}`);
    document.querySelector("#quote").textContent = dadJokes[randomNumber].joke;
    document.querySelector("#source").textContent = dadJokes[randomNumber].source;
    audio.play();
});