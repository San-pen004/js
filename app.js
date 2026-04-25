let variable1 = 3;
let variable2 = 8;

count = variable1 + variable2;

console.log(count);

let name1 = "Sasha";
let name2 = "Pen";

personality = name1 + name2;

console.log(personality);

let age = 17;

if (age < 18) {
  alert("Приходи, когда исполнится 18 лет");
} else if (age > 18 && age < 99) {
  alert("Приятного просмотра");
} else {
  alert("Вам в другое место");
}

let title = "pflfxf";

if (title === "") {
  console.log("Название задачи не указано");
} else {
  console.log("Задача:", title);
}

let tasks = 10;

if (tasks === 0) {
  console.log("Список пуст");
} else if (tasks <= 3) {
  console.log("Немного задач");
} else if (tasks > 3) {
  console.log("Много задач");
}

function sum(a, b) {
  return `Сумма чисел ${ a } и ${ b } = ${ a + b } `;
}

console.log(sum(13, 63));


function isTaskDone(status){
  if(status==="выполнена"){
    return true;
  }
  else {
    return false;
  }
}

console.log(isTaskDone("выполнена"));
console.log(isTaskDone("активна"));

function taskSummary( total , done ){
  return `
            Всего: ${ total } | Выполнено: ${ done } | Активных: ${ total - done }
          `
}

console.log(taskSummary(20,5))

const cities = ["Moscow" , "Saint Petersburg" , "Kazan" , "Kaliningrad"];

cities[2] = "Sochi";

console.log(cities);

let task = {
  id: 1 ,
  title: "Сделать дз" ,
  status: "Не выполнена" ,
}

console.log(task.id);
console.log(task.title);
console.log(task.status);

const assignments = [
  {id: 1 , title: "Сделать дз" , status: "Не выполнена" },
  {id: 2 , title: "Убраться в комнате" , status: "Не выполнена" },
  {id: 3 , title: "Помыть посуду" , status: "Не выполнена" }
] ;

console.log(assignments[0].title);
console.log(assignments[1].status);

assignments[0].status = "Выполнена";

assignments[assignments.length] = {id: 4 , title: "Погулять с собакой" , status: "Не выполнена" };

console.log(assignments);

const user = ["Sasha" ,  {id: 1 , title: "Сделать дз" , status: "Не выполнена" },
  {id: 2 , title: "Убраться в комнате" , status: "Не выполнена" },
  {id: 3 , title: "Помыть посуду" , status: "Не выполнена" }
];
console.log(`Имя пользователя:` , user[0], `| Всего задач:`, assignments.length);