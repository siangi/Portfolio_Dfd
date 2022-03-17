"use strict";

window.onload = () => {
    fadeHomeLink();
};

// header flying in
// use variable font for header?? and update thickness
// title reacting to mouse position

// on hover project cards get bigger, shadow?, background?
// images get smaller, text fades in
//

// fix the navbar when you scroll out of the header, show "home" link

// as soon as we leave the header, the home link appears.
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
