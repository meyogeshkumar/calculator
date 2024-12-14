var show = document.getElementById("show")

function num(event)
{
    show.value += event;
}

function clr()
{
    show.value = ' '
}
function del()
{
    show.value = show.value.slice(0,-1)
}

function calculate(){
    try{
        show.value = eval(show.value)
    }
    catch(error){
        show.value="Error"
    }
}
    

    