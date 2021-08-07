//document.querySelector("#createContact").addEventListener("click", () => showContact());
document.querySelector(".menu").addEventListener("click", function () { this.classList.toggle('open') })
document.querySelector("#curriculumBtn").addEventListener("click", () => downloadCV());

window.onload = async () => {
    welcomeMesagge();
    await insertItemsTimeline();
    await insertSkills();
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
    let items = await getData("./documents/itemsToAdd.json")
    for (let element of items.timelineItems) {
        if (element.year == 0) {
            element.year = currentYear;
            element.id = currentYear;
        }
        elementTimeline(element);
    }
    await wait(500);
}

const insertSkills = async () => {
    let items = await getData("./documents/itemsToAdd.json")
    for (let element of items.skills) {
        addSkill(element);
    }
    await wait(500);
}

const interactiveScroll = () => {
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
    let vpSize = window.innerHeight * .6;
    let e;
    for (let element of [skill,about]) {
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

const downloadCV = () => {
    let link = document.createElement("a");
    link.setAttribute('download', "Alberto Soto CV");
    link.href = "./documents/Alberto Soto Ortega.pdf";
    link.click();
    link.remove();
}

/* Configure and initialize Swiper lib */
const startSwiper = () => {
    const timelineSwiper = new Swiper(".swiper-container", {
        direction: "vertical",
        slidesPerView: 1,
        speed: 1600,
        effect: "flip",
        pagination: '.swiper-pagination',
        paginationBulletRender: function (swiper, index, className) {
            let year = document.querySelectorAll('.swiper-slide')[index].querySelector(".timeline-year").innerText;
            return '<span class="' + className + '">' + year + '</span>';
        },
        paginationClickable: true
    });
}

/*Configuration for background animation*/
particlesJS.load("particles-js", "../documents/particlesCnfg.json");

const getData = async origin => {
    let file = await fetch(origin);
    let jsonObect = await file.json();
    return jsonObect;
}