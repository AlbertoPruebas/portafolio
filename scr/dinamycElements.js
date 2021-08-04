document.addEventListener("keydown", e => {
    if (document.querySelector("#modalBckgrnd")) {
        if (e.key == "Escape") {
            hiddeModal();
            return;
        }
        if (e.key != "Tab") return;
        let first = document.querySelector("#modalBckgrnd").firstChild.firstElementChild;
        let last = document.querySelector("#modalBckgrnd").firstChild.lastElementChild;
        if (first == e.target && e.shiftKey == true) {
            e.preventDefault();
            last.focus();
        }
        if (last == e.target && e.shiftKey == false) {
            e.preventDefault();
            first.focus();
        }
    }
});

const showContact = () => {
    let inputName = createInput("text", "contactData", "name", "Nombre");
    let inputTel = createInput("text", "contactData", "noTel", "Telefono");
    let inputEmail = createInput("email", "contactData", "email", "Correo Electronico");
    let textComments = createTextarea("contactData", "comments", "Comentarios", 5, 22);
    let btnSend = createButton("btnCmnts", "btnCmnts", "Enviar");
    let btnClose = createButton("btnCmnts", "btnClose", "&times");
    btnClose.addEventListener("click", () => hiddeModal());
    showModal([btnClose, inputName, inputTel, inputEmail, textComments, btnSend])
}

const showModal = (elments) => {
    let cont = document.createElement("div");
    cont.className = "modal";
    cont.tabIndex = "-1"
    cont.id = "modalBckgrnd";
    let modal = document.createElement("div");
    modal.id = "modalElements";
    elments.forEach(e => {
        modal.appendChild(e);
    })
    cont.appendChild(modal);
    document.body.appendChild(cont);
    setTimeout(() => document.querySelector("#modalBckgrnd").style.opacity = "1", 1);
    document.querySelector("#modalBckgrnd").focus();
}

const hiddeModal = () => {
    let modal = document.querySelectorAll("#modalBckgrnd");
    if (modal.length > 0) {
        modal[0].style.opacity = "0"
        setTimeout(() => document.body.removeChild(modal[0]), 401);
    }
}

const createInput = (_type, _class, _id, _placeholder) => {
    let input = document.createElement("input");
    if (_type != undefined) input.type = _type;
    if (_class != undefined) input.className = _class;
    if (_id != undefined) input.id = _id;
    if (_placeholder != undefined) input.placeholder = _placeholder;
    return input;
}

const createTextarea = (_class, _id, _placeholder, _rows, _cols) => {
    let text = document.createElement("textarea");
    if (_class != undefined) text.className = _class;
    if (_id != undefined) text.id = _id;
    if (_placeholder != undefined) text.placeholder = _placeholder;
    if (_rows != undefined) text.rows = _rows;
    if (_cols != undefined) text.cols = _cols;
    return text;
}

const createButton = (_class, _id, _text) => {
    let btn = document.createElement("button");
    if (_class != undefined) btn.className = _class;
    if (_id != undefined) btn.id = _id;
    if (_text != undefined) btn.innerHTML = _text
    return btn;
}




const writeLine = async (text, color, nowait = false, permanent = true) => {
    let p = document.querySelector(".lineTerminal");
    p.style.color = color;
    for (let c = 0; c < text.length; c++) {
        p.innerHTML = p.innerHTML + text[c];
        if (!nowait) await wait(Math.random() * 300);
    }
    if (permanent) {
        p.classList.toggle("lineTerminal");
        newTerminalLine();
    }
}

const newTerminalLine = () => {
    document.querySelector("#cursor").remove();
    let newLine = document.createElement("label");
    newLine.classList.add("line", "lineTerminal");
    document.querySelector(".console").appendChild(newLine);
    let newCursor = document.createElement("label");
    newCursor.id = "cursor";
    newCursor.innerText = "|";
    document.querySelector(".console").appendChild(newCursor);
}

const elementTimeline = (data) => {
    let divTime = document.createElement("div");
    divTime.className = "swiper-slide"
    divTime.style.backgroundImage = data.img

    let divContent = document.createElement("div");
    divContent.className = "swiper-slide-content"

    let spanYear = document.createElement("span");
    spanYear.className = "timeline-year";
    spanYear.innerText = data.year;

    let h4Title = document.createElement("h4");
    h4Title.className = "timeline-title";
    h4Title.innerText = data.title;

    let pText = document.createElement("p");
    pText.className = "timeline-text";
    pText.innerText = data.text;

    divContent.appendChild(spanYear);
    divContent.appendChild(h4Title);
    divContent.appendChild(pText);
    divTime.appendChild(divContent);

    document.querySelector(".swiper-wrapper").appendChild(divTime)
}


const startSwiper = () => {
    const timelineSwiper = new Swiper(".swiper-container", {
        direction: "vertical",
        slidesPerView: 1,
        speed: 1600,
        height: 300,
        effect: "flip",
        pagination: '.swiper-pagination',
        paginationBulletRender: function (swiper, index, className) {
          let year = document.querySelectorAll('.swiper-slide')[index].querySelector(".timeline-year").innerText;
          return '<span class="' + className + '">' + year + '</span>';
        },
        paginationClickable: true,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev"
    });
}