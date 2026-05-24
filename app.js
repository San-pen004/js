const input = document.querySelector(".task-entry__input");
const addButton = document.querySelector(".task-entry__btn");
const container = document.querySelector(".tasks");
const searchInpuut = document.querySelector(".assignment-entry__input");
const footer = document.querySelector(".footer-controls");
const sortSelect = document.querySelector(".toolbar__sort");
const form = document.querySelector(".assignment-entry");
const tabButtons = document.querySelector(".tabs__item");

const tasks = [];

const task = document.createElement("div");
task.classList.add("task");

const content = document.createElement("div");
content.classList.add("task__content");
task.append(content);

const title = document.createElement("div");
title.classList.add("task__title");

const meta = document.createElement("div");
meta.classList.add("task__meta");

content.append(title, meta);

const actions = document.createElement("div");
actions.classList.add("task__actions");
task.append(actions);



const form = document.querySelector("assignment-entry");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask();

})

function addTask(){
    const text = input.value.trim();
    if (text === "" || text.length < 3){
        input.classList.add("")
        return;}
    input.classList.remove("")
    const newtask = {
        id: tasks.length + 1,
        text: text,
        done: false,
        date: "11.11.2026"
    };
    tasks.push(newTasks);
    input.value = "";
    renderAll();
}