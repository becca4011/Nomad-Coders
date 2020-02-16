const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) //일정을 지우는 것
{
    /*html에서 지우는 것(localstorage에서는 아직 안지워짐)*/
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    /*localstoreage에서 지우는 것*/
    const cleanToDos = toDos.filter(function(toDo)
    {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;

    saveToDos(); //toDos를 cleanToDos와 같게 하고(delbtn을 눌렀을 때), toDos를 저장
}

function saveToDos() //localstorage에 toDos를 저장
{
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JSON.stringify는 자바스크립트 object를 string으로 바꿔줌
}

function paintToDo(text) //일정이 보이게 함
{
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = 
    {
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos(); //push를 한 다음에 저장을 해야 함(push를 하기 전에는 아무것도 저장이 안되어있기 때문)
}

function handleSub(event) //submit
{
    event.preventDefault();

    const currentValue = toDoInput.value;
    paintToDo(currentValue);

    toDoInput.value = "";  
}

function loadToDos()
{
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null)
    {
        const parsedToDos = JSON.parse(loadedToDos);

        parsedToDos.forEach(function(toDo)
        {
            paintToDo(toDo.text);
        });
    }
}

function init()
{
    loadToDos();
    toDoForm.addEventListener("submit", handleSub);
}
init();