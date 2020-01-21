const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick()
{
    /*const hasClass = title.classList.contains(CLICKED_CLASS);

    if(!hasClass)
    {
        //title.className = CLICKED_CLASS;
        title.classList.add(CLICKED_CLASS);
    }
    else
    {
        //title.className = "";
        title.classList.remove(CLICKED_CLASS);
    }*/

    /*위 주석 부분의 코드를 요약*/
    title.classList.toggle(CLICKED_CLASS); //toggle에 있는 값을 체크해서 clicked란 class가 없으면 add, 있으면 remove함
}

function init()
{
    title.addEventListener("click", handleClick);
}
init();