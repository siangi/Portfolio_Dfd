let nameVisible = true;

window.onload = () => {
    headerFadeIn();
    // createHeaderText();
    fadeHomeLink();
    navbarLinkArrows();
    articleImagesScaling();
    registerPojectsClicks();
    randomMoveBalls();
};

// title reacting to mouse position
function createHeaderText() {
    const parent = document.querySelector(".name-title");
    createTextInLetters("h1", "left show", "SIMON", parent);
    createTextInLetters("h1", "left hidden", "SUCKS", parent);
}

function createTextInLetters(tag, classes, text, parent) {
    const chars = text.split("");
    chars.forEach((character) => {
        let newElem = document.createElement(tag);
        newElem.className = classes;
        newElem.textContent = character;
        parent.appendChild(newElem);
    });
}

function headerFadeIn() {
    gsap.from(".name-title .left", {
        x: "-10vw",
        opacity: 0.1,
        // rotateY: 30,
        duration: 0.7,
    });

    gsap.from(".name-title .right", {
        x: "+10vw",
        opacity: 0.1,
        // rotateY: 30,
        duration: 0.7,
    });
}

function fadeHomeLink() {
    gsap.to("#home-link", {
        opacity: 1,
        scrollTrigger: {
            trigger: "#introduction",
            scrub: true,
            start: "top center",
            end: "top top",
        },
    });
}

function navbarLinkArrows() {
    let target = document.querySelector("nav a[href='#projects']");
    gsap.to(target, {
        onCompleteParams: [target],
        onComplete: (param) => {
            param.classList.toggle("up-arrow");
            param.classList.toggle("down-arrow");
        },
        scrollTrigger: {
            trigger: "#projects",
            start: "top 25%",
            end: "top top",
            toggleActions: "play restart restart none",
        },
        duration: 0.1,
    });
}

function articleImagesScaling() {
    let targets = document.querySelectorAll("article");

    for (let i = 0; i < targets.length; i++) {
        let article = targets[i];

        gsap.from(article, {
            opacity: 0.3,
            scrollTrigger: {
                trigger: article,
                start: "top 90%",
                end: "top 45%",
                scrub: true,
            },
        });
    }
}

function registerPojectsClicks() {
    let articles = document.querySelectorAll("#projects article");
    articles.forEach((article) => {
        let link = article.querySelector(".details").getAttribute("href");

        if (link === "") {
            return;
        }

        article.addEventListener("click", () => {
            window.location.assign(link);
        });
    });
}

function randomMoveBalls() {
    const blueform = document.querySelector("#blueform");
    const yellowform = document.querySelector("#yellowform");

    const positions = getPositionsArray(blueform.clientWidth, blueform.clientHeight, document.documentElement.clientWidth, document.documentElement.clientHeight);
    const loops = 30;
    const animLength = 2;

    console.log(blueform.scrollWidth, blueform.scrollHeight);
    const timeline = gsap.timeline({ repeat: -1 });
    for (let i = 0; i < loops; i++) {
        const bluePos = positions[Math.floor(Math.random() * positions.length)];
        const yellowPos = positions[Math.floor(Math.random() * positions.length)];
        timeline.to(
            blueform,
            {
                x: bluePos[0],
                y: bluePos[1],
                duration: animLength,
            },
            animLength * i
        );

        timeline.to(
            yellowform,
            {
                x: yellowPos[0],
                y: yellowPos[1],
                duration: animLength,
            },
            animLength * i
        );
    }

    timeline.play();
}

function getPositionsArray(formWidth, formHeight, boundsWidth, boundsHeight) {
    return [
        [0, 0],
        [boundsWidth - formWidth, 0],
        [0, boundsHeight - formHeight],
        [boundsWidth - formWidth, boundsHeight - formHeight],
    ];
}
