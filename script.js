let title = document.querySelector(".title");
let StoryOpening = document.querySelector(".story-opening");
let button = document.querySelector(".option-one");
let Button = document.querySelector(".option-two");
let StoryPart2school = document.querySelector(".option-one-screen");
let StoryPart2hospital = document.querySelector(".option-two-screen");
let StoryPart3school = document.querySelector(".option-one-end");
let StoryPart3hospital = document.querySelector(".option-two-end");
let buttons = document.querySelector(".run");
let Buttons = document.querySelector(".L");
let body = document.querySelector("body");






button.onclick = function() {

    StoryPart2school.style.display = "block";
    button.style.display = "none";
    Button.style.display = "none";
    StoryOpening.style.display = "none";
    Buttons.style.display = "block";
    body.style.backgroundColor = "#052545";



};



Button.onclick = function() {
    StoryPart2hospital.style.display = "block";
    button.style.display = "none";
    Button.style.display = "none";
    StoryOpening.style.display = "none";
    buttons.style.display = "block";
    body.style.backgroundColor = "#57000c";
};

Buttons.onmouseover = function() {
    StoryPart3school.style.display = "block";
    StoryPart2school.style.display = "none";
    button.style.display = "none";
    Button.style.display = "none";
    StoryOpening.style.display = "none";
    Buttons.style.display = "none";
    title.innerHTML = "You are win!";
};

buttons.onmouseover = function() {
    StoryPart3hospital.style.display = "block";
    StoryPart2hospital.style.display = "none";
    button.style.display = "none";
    Button.style.display = "none";
    StoryOpening.style.display = "none";
    buttons.style.display = "none";

    title.innerHTML = "You are win!";

};