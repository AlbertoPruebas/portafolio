
document.querySelector("#createContact").addEventListener("click",() => showContact());
document.querySelector(".menu").addEventListener("click",function(){this.classList.toggle('open')})

window.onload = async () => {
    await writeLine("Hola!","#9CD9F0");
    await writeLine("Soy Alberto Soto","#CDEE69");
    await writeLine("Desarrollador","#CDEE69");
    await writeLine("[?] Te gustaria conocerme?","#E09690",true);
    await writeLine("(Scroll down to continue)","#E09690",true);
    await writeLine(">","#fff",false,false);
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));