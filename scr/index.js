//document.querySelector("#createContact").addEventListener("click", () => showContact());
document.querySelector(".menu").addEventListener("click", function () { this.classList.toggle('open') })



window.onload = () => {
    welcomeMesagge();
    insertItemsTimeline();
    startSwiper();
    document.addEventListener("scroll", () => { interactiveScroll() })
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const welcomeMesagge = async () => {
    await writeLine("$ Hola!", "var(--myBlue)");
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

const interactiveScroll = async () => {
    let lt = document.querySelector(".lineTerminal");
    let csl = document.querySelector("#welcome");
    let lttop = isInViewport(lt, "top");
    if (lttop == 0) {
        let hlt = lt.offsetHeight;
        let hCon = csl.offsetHeight;
        csl.style.top = `${-(hCon - hlt - 50)}px`;
    }
    proximity();
}

const proximity = async () => {
    let elementInVP = class {
        constructor(element, ancho) {
            this.element = element;
            this.text = ancho;
        }
    }
    let about = new elementInVP(document.querySelector("#about"), "> Sobre Mi");
    let skill = new elementInVP(document.querySelector("#skills"), "> Habilidades");
    let vpSize = window.innerHeight * .60;
    let e;
    for (let element of [about, skill]) {
        if (isInViewport(element.element, "top") <= vpSize) {
            e = element;
        }
    }
    if (e == undefined) {
        await writeLine(">", "var(--myWhite)", true, false);
    } else {
        await writeLine(e.text, "var(--myWhite)", true, false);
    }

}

const isInViewport = (el, reference) => {
    const rect = el.getBoundingClientRect();
    return rect[reference]
}

const textInTerminal = () => {
    let t = document.querySelector(".lineTerminal")
    return t.innerText;
}

/*Configuration for background animation*/
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 700
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 0.1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});