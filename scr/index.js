
document.querySelector("#createContact").addEventListener("click", () => showContact());
document.querySelector(".menu").addEventListener("click", function () { this.classList.toggle('open') })



window.onload = () => {
    welcomeMesagge();
    insertItemsTimeline();
    startSwiper();
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const welcomeMesagge = async () => {
    await writeLine("Hola!", "var(--myBlue)");
    await writeLine("Soy Alberto Soto", "var(--myYellow)");
    await writeLine("Desarrollador de Software", "var(--myYellow)");
    await writeLine("[?] Te gustaria conocerme?", "var(--myPink)", true);
    await writeLine("(Scroll down to continue)", "var(--myPink)", true);
    await writeLine(">", "var(--myWhite)", false, false);
}

const insertItemsTimeline = async () => {
    let currentYear = new Date().getFullYear();
    let currentItem = {
        img: "url(./img/world.gif)",
        id: currentYear,
        year: currentYear,
        title: "En constante Mejora Continua",
        text: "Como buen amante de la tecnologia, me gusta estar al día, para poder ofrecer mas y mejores soluciones."
    }

    let item2019 = {
        img: "url(./img/unadm-logo.png)",
        year: 2019,
        title: "Inicio mis Estudios Universitarios",
        text: "Aun que siempre he sido autodidacta, hay momentos en los que se requiere una guia profesional, y la Universidad Abierta y a Distancia de México, me ofrece ambas cosas."
    }

    let item2016 = {
        img: "url(./img/code.gif)",
        year: 2016,
        title: "Mi primer proyecto Web",
        text: "Tuve la oportunidad de realizar un proyecto web para poder agilizar mis actividades, este aumento mi curiosidad por conocer mas tecnologias, como PHP y MySQL."
    }

    let item2011 = {
        img: "url()",
        year: 2011,
        title: "Inicia el Camino",
        text: `Por accidente descubro que con el block de notas se puede hacer "MAGIA!"  🤪.`
    }

    let arData = [currentItem, item2019, item2016, item2011];
    for (let element of arData) {
        elementTimeline(element);
    }
    await wait(1000);
}

