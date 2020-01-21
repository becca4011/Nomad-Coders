/*const age = prompt("당신의 나이는?");

if(age > 19)
{
    console.log("성인");
}
else if(age <= 19 && age >= 8)
{
    console.log("학생");
}
else
{
    console.log("아동");
}*/

const title = document.querySelector("#title");

const BASE_COLOR = "lightblue";
const OTHER_COLOR = "coral";

function handleClick()
{
    const currentColor = title.style.color;

    if(currentColor === BASE_COLOR)
    {
        title.style.color = OTHER_COLOR;
    }
    else
    {
        title.style.color = BASE_COLOR;
    }
}

function init()
{
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick); //이벤트는 javascript dom event mdn을 치면 나옴
}
init();