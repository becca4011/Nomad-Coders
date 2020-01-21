const title = document.querySelector("#title");

/*
function handleRes()
{
    console.log("resize");
}

window.addEventListener("resize", handleRes); //("이벤트", 함수)
*/

function handleClick()
{
    title.style.color = "lightblue";
}

title.addEventListener("click", handleClick);