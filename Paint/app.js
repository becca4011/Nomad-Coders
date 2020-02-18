const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const btnmode = document.getElementById("jsMode");

/*캔버스의 사이즈*/
canvas.width = 700;
canvas.height = 700;

/*선의 색과 굵기(default)*/
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting()
{
    painting = false; //그려지지 않음
}

function startPainting()
{
    painting = true; //그려짐
}

function onMouseMove(event)
{
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) //마우스를 누르지 않거나 캔버스를 벗어났을 때
    {
        /*마우스가 움직이면서 선(path)을 만들고 있지만 painting = false 이므로 보이지 않음*/
        //console.log(x, y, "에 path 생성");
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    else //마우스를 누르고 드래그할 때
    {
        //console.log(x, y, "에 line 생성");
        ctx.lineTo(x, y);
        ctx.stroke(); //선을 그음(보이게 함)
    }
}

function clickColor(event)
{
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function changeRange(event)
{
    const size = event.target.value;
    ctx.lineWidth = size;
}

function clickMode()
{
    if(filling === true)
    {
        filling = false;
        btnmode.innerText = "Fill";
    }
    else
    {
        filling = true;
        btnmode.innerText = "Paint";
    }
}

if(canvas)
{
    canvas.addEventListener("mousemove", onMouseMove); //마우스를 움직일 때
    canvas.addEventListener("mousedown", startPainting); //마우스를 눌렀을 때
    canvas.addEventListener("mouseup", stopPainting); //마우스를 누르지 않을 때
    canvas.addEventListener("mouseleave", stopPainting); //마우스가 캔버스를 벗어닜을 때
}

Array.from(colors).forEach(color => color.addEventListener("click", clickColor));

if(range)
{
    range.addEventListener("input", changeRange);
}

if(btnmode)
{
    btnmode.addEventListener("click", clickMode);
}