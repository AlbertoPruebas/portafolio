
document.querySelector("#createContact").addEventListener("click",() => showContact());
document.querySelector(".menu").addEventListener("click",function(){this.classList.toggle('open')})

window.onload = () => {
    welcomeMesagge();
    insertItemsTimeline();
    startSwiper();
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const welcomeMesagge = async () => {
    await writeLine("Hola!","#9CD9F0");
    await writeLine("Soy Alberto Soto","#CDEE69");
    await writeLine("Desarrollador de Software","#CDEE69");
    await writeLine("[?] Te gustaria conocerme?","#E09690",true);
    await writeLine("(Scroll down to continue)","#E09690",true);
    await writeLine(">","#fff",false,false);
}

const insertItemsTimeline = async () => {
    let item2021 = {
        img:"url(https://unsplash.it/1920/500?image=11)",
        id: 2021,
        year: 2021,
        title: "Avanzando por el Mundo",
        text: "Me encuentro en constante capacitacion, buscando mejorar mis capacidades para poder ofrecer mas y mejores soluciones"
    }

    let item2019 = {
        img:"url(https://unsplash.it/1920/500?image=12)",
        year: 2019,
        title: "Inicio mis Estudios Universitarios",
        text: "Aun que siempre e preferido la autonomia, hay momentos en los que se requiere una guia, y la Universidad Abierta y a Distancia de México, me ofrece una mezacla perfecta de ambas cosas."
    }

    let item2016 = {
        img:"url(https://unsplash.it/1920/500?image=13)",
        year: 2016,
        title: "Mi primer proyecto Web",
        text: "Tuve la oportunidad de realizar un proyecto web para poder agilizar mis actividades, este me permitio hacer mi curiosidad mas grande y poder conocer tecnologiass como PHP y MySQL."
    }

    let arData = [item2021,item2019,item2016];
    for(let element of arData){
        elementTimeline(element);
    }
    await wait(1000);
}

