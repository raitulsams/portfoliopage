document.addEventListener("DOMContentLoaded", function () { new SweetScroll({}), particlesJS("particles-js", { particles: { number: { value: 30, density: { enable: !0, value_area: 800 } }, color: { value: "#ffffff" }, shape: { type: "polygon", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } }, opacity: { value: .5, random: !1, anim: { enable: !1, speed: 1, opacity_min: .1, sync: !1 } }, size: { value: 3, random: !0, anim: { enable: !1, speed: 19.18081918081918, size_min: .1, sync: !1 } }, line_linked: { enable: !0, distance: 150, color: "#ffffff", opacity: .4, width: 1 }, move: { enable: !0, speed: 4, direction: "none", random: !0, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 1200 } }, nb: 80 }, interactivity: { detect_on: "canvas", events: { onhover: { enable: !1, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: !0 }) }, !1);
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.ityped = {}) }(this, function (e) { "use strict"; e.init = function (e, t) { var n = 0, o = void 0, r = void 0, i = function (e, t) { n === o && t.loop && (n = 0), setTimeout(function () { a(e[n], t) }, t.startDelay) }, a = function (t, n) { var o = 0, r = t.length, i = setInterval(function () { if (n.placeholder ? e.placeholder += t[o] : e.textContent += t[o], ++o === r) return d(i, n) }, n.typeSpeed) }, d = function (e, t) { return clearInterval(e), t.disableBackTyping && n === o - 1 ? t.onFinished() : t.loop || n !== o - 1 ? void setTimeout(function () { return c(t) }, t.backDelay) : t.onFinished() }, c = function (t) { var n = t.placeholder ? e.placeholder : e.textContent, o = n.length, r = setInterval(function () { if (t.placeholder ? e.placeholder = e.placeholder.substr(0, --o) : e.textContent = n.substr(0, --o), 0 === o) return s(r, t) }, t.backSpeed) }, s = function (e, t) { clearInterval(e), ++n, i(r, t) }; return function (t) { var n = function (e) { var t = e.strings, n = void 0 === t ? ["Put your strings here...", "and Enjoy!"] : t, o = e.typeSpeed, r = void 0 === o ? 100 : o, i = e.backSpeed, a = void 0 === i ? 50 : i, d = e.backDelay, c = void 0 === d ? 500 : d, s = e.startDelay, l = void 0 === s ? 500 : s, u = e.cursorChar, p = void 0 === u ? "|" : u, f = e.placeholder, v = void 0 !== f && f, h = e.showCursor, y = void 0 === h || h, b = e.disableBackTyping, g = void 0 !== b && b, C = e.onFinished, k = void 0 === C ? function () { } : C, m = e.loop; return { strings: n, typeSpeed: r, backSpeed: a, cursorChar: p, backDelay: c, placeholder: v, startDelay: l, showCursor: y, loop: void 0 === m || m, disableBackTyping: g, onFinished: k } }(t || {}), a = n.strings; r = a, o = a.length, "string" == typeof e && (e = document.querySelector(e)), n.showCursor && function (e, t) { var n = document.createElement("span"); n.classList.add("ityped-cursor"), n.textContent = "|", n.textContent = t.cursorChar, e.insertAdjacentElement("afterend", n) }(e, n), i(a, n) }(t) }, Object.defineProperty(e, "__esModule", { value: !0 }) });
window.ityped.init(document.querySelector(".iTyped"), {
    strings: [
        "Developer",
        "Designer",
        "Tech Enthutiast"
    ],
    loop: true,
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 800,
    // startDelay: 1000,
    showCursor: false,
    loopCount: 1,
    callback: function () { },
    // starting callback function before each string
    preStringTyped: function () { },
    //callback for every typed string
    onStringTyped: function () { },
    // callback for reset
    resetCallback: function () { },
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
});