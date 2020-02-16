const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
      SHOWING_ON = "showing";


function saveName(text) //이름 저장
{
    localStorage.setItem(USER_LS, text);
}

function handleSub(event) //submit
{
    event.preventDefault(); //enter를 눌렀을 때 새로고침을 하는 이벤트를 막음
    const currentValue = input.value;
    paint(currentValue);
    saveName(currentValue);
}

function askName()
{
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSub);
}

function paint(text)
{
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}

function loadName()
{
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) //localstorage에 유저가 없을 때
    {
        askName();
    }
    else //localstorage에 유저가 있을 때
    {
        paint(currentUser);
    }
}

function init()
{
    loadName();
}
init();