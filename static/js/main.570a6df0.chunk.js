(this["webpackJsonptoomuchbob.github.io"]=this["webpackJsonptoomuchbob.github.io"]||[]).push([[0],[,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(0),s=i(1),n=i.n(s),o=i(4),r=i.n(o),a=(i(11),i(2)),l=i(5),d=i.n(l),j=Object(s.createContext)(),h=function(e){var t=e.children,i=Object(s.useState)(),o=Object(a.a)(i,2),r=o[0],l=o[1],d=n.a.useMemo((function(){return{nav:r,setNav:l}}),[r,l]);return Object(c.jsx)(j.Provider,{value:d,children:t})};var b=function(){var e=Object(s.useContext)(j).nav,t=Object(s.useState)({spriteSheet:void 0,spriteData:void 0,currentSprite:void 0,spriteX:0,spriteY:0,spriteSpeed:0,idleAnim:[],pointingAnim:[],walkAnim:[]}),i=Object(a.a)(t,1)[0];return Object(c.jsx)(d.a,{preload:function(e){e.windowWidth>=1280?(i.spriteSheet=e.loadImage("./assets/sprite/p5guy_300.png"),i.spriteData=e.loadJSON("./assets/sprite/p5guy_300.json")):e.windowWidth>=812?(i.spriteSheet=e.loadImage("./assets/sprite/p5guy_200.png"),i.spriteData=e.loadJSON("./assets/sprite/p5guy_200.json")):(i.spriteSheet=e.loadImage("./assets/sprite/p5guy.png"),i.spriteData=e.loadJSON("./assets/sprite/p5guy.json"))},setup:function(e,t){e.createCanvas(e.windowWidth,e.windowHeight).parent(t),e.frameRate(30),i.spriteData.idle&&i.spriteData.idle.forEach((function(e){var t=e.x,c=e.y,s=e.w,n=e.h,o=i.spriteSheet.get(t,c,s,n);i.idleAnim.push(o)})),i.spriteData.pointing&&i.spriteData.pointing.forEach((function(e){var t=e.x,c=e.y,s=e.w,n=e.h,o=i.spriteSheet.get(t,c,s,n);i.pointingAnim.push(o)})),i.spriteData.walk&&i.spriteData.walk.forEach((function(e){var t=e.x,c=e.y,s=e.w,n=e.h,o=i.spriteSheet.get(t,c,s,n);i.walkAnim.push(o)}))},windowResized:function(e){e.resizeCanvas(e.windowWidth,e.windowHeight)},draw:function(t){t.background("#1e1e1e"),i.currentSprite=i.idleAnim[t.floor(.4*t.frameCount)%i.idleAnim.length],e&&(t.mouseX>e.left&&t.mouseX<e.right&&t.mouseY>e.top&&t.mouseY<e.bottom?i.currentSprite=i.pointingAnim[t.floor(.4*t.frameCount)%i.pointingAnim.length]:i.currentSprite=i.idleAnim[t.floor(.4*t.frameCount)%i.idleAnim.length]),e&&(i.spriteY=e.bottom+window.scrollY);var c=t.mouseX-i.spriteX;i.spriteSpeed=Math.sign(c)+c/30,Math.abs(c)<1?i.spriteSpeed=0:i.spriteX=i.spriteX+i.spriteSpeed,i.currentSprite&&t.image(i.currentSprite,i.spriteX,i.spriteY)},style:{position:"absolute",zIndex:-1}})};i(12);var p=function(){var e=Object(s.useContext)(j),t=e.nav,i=e.setNav;Object(s.useEffect)((function(){i(document.getElementById("nav-canvas-links-about-me").getBoundingClientRect())}),[i]);var n=function(e){i(e.target.getBoundingClientRect()),console.log(t)};return Object(c.jsxs)("div",{className:"link",children:[Object(c.jsx)("a",{href:"#about-me-title",id:"nav-canvas-links-about-me",onMouseOver:n,children:"About Me"}),Object(c.jsx)("a",{href:"#portfolio-title",id:"nav-canvas-links-portfolio",onMouseOver:n,children:"My Work"}),Object(c.jsx)("a",{href:"#about-this-title",id:"nav-canvas-links-about-this-page",onMouseOver:n,children:"About This Page"})]})};i(13);var u=function(){var e=Object(s.useRef)(null);return Object(c.jsxs)("div",{id:"about-me-container",children:[Object(c.jsx)("div",{className:"title",id:"about-me-title",children:"About Me"}),Object(c.jsx)("div",{className:"content-container",id:"about-me",ref:e,children:Object(c.jsxs)("div",{id:"about-me-content",children:[Object(c.jsxs)("p",{id:"about-me-description",children:["Born and raised in Cleveland, Ohio; I've relocated to Charlotte, NC to shift careers from Information Technology to Full-Stack Web Development/Design. Aggressively leveling up my skills, I want to bring my creativity from ",Object(c.jsx)("strong",{children:"art "}),"and ",Object(c.jsx)("strong",{children:"music"})," into ",Object(c.jsx)("strong",{children:"web design"}),"."]}),Object(c.jsxs)("div",{id:"proficiencies",children:[Object(c.jsx)("span",{id:"proficiencies-title",children:"Proficiencies:"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("li",{children:"HTML"}),Object(c.jsx)("li",{children:"CSS"}),Object(c.jsx)("li",{children:"React"}),Object(c.jsx)("li",{children:"Bootstrap"}),Object(c.jsx)("li",{children:"Handlebars"}),Object(c.jsx)("li",{children:"Javascript"}),Object(c.jsx)("li",{children:"jQuery"}),Object(c.jsx)("li",{children:"APIs"}),Object(c.jsx)("li",{children:"Unit Testing"}),Object(c.jsx)("li",{children:"Node"}),Object(c.jsx)("li",{children:"Express"}),Object(c.jsx)("li",{children:"MySQL"}),Object(c.jsx)("li",{children:"MongoDB"})]})]}),Object(c.jsxs)("div",{id:"socials",children:[Object(c.jsx)("span",{id:"socials-title",children:"Socials: "}),Object(c.jsx)("a",{href:"http://www.github.com/Toomuchbob",className:"social-icon-link",children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 438.5 438.5",children:[Object(c.jsx)("path",{d:"M158.2 352.6c-3 0.6-4.4 2-4 4.3 0.4 2.3 2.1 3 5.1 2.3 3-0.8 4.4-2.1 4-4C162.9 353.1 161.2 352.2 158.2 352.6z"}),Object(c.jsx)("path",{d:"M141.9 354.9c-3 0-4.6 1-4.6 3.1 0 2.5 1.6 3.5 4.9 3.1 3 0 4.6-1 4.6-3.1C146.8 355.6 145.1 354.5 141.9 354.9z"}),Object(c.jsx)("path",{d:"M119.6 354c-0.8 2.1 0.5 3.5 3.7 4.3 2.9 1.1 4.7 0.6 5.4-1.7 0.6-2.1-0.7-3.6-3.7-4.6C122.2 351.3 120.4 351.9 119.6 354z"}),Object(c.jsx)("path",{d:"M414.4 24.1C398.3 8 379 0 356.3 0H82.2C59.6 0 40.2 8 24.1 24.1 8 40.2 0 59.6 0 82.2v274.1c0 22.7 8 42 24.1 58.1 16.1 16.1 35.5 24.1 58.1 24.1h64c4.2 0 7.3-0.1 9.4-0.4 2.1-0.3 4.2-1.5 6.3-3.7 2.1-2.2 3.1-5.4 3.1-9.6 0-0.6 0-7-0.1-19.4 -0.1-12.4-0.1-22.2-0.1-29.4l-6.6 1.1c-4.2 0.8-9.5 1.1-15.8 1 -6.4-0.1-13-0.8-19.8-2 -6.9-1.2-13.2-4.1-19.1-8.6 -5.9-4.5-10.1-10.3-12.6-17.6l-2.9-6.6c-1.9-4.4-4.9-9.2-9-14.6 -4.1-5.3-8.2-8.9-12.4-10.9l-2-1.4c-1.3-1-2.6-2.1-3.7-3.4 -1.1-1.3-2-2.7-2.6-4 -0.6-1.3-0.1-2.4 1.4-3.3 1.5-0.9 4.3-1.3 8.3-1.3l5.7 0.9c3.8 0.8 8.5 3 14.1 6.9 5.6 3.8 10.2 8.8 13.8 14.8 4.4 7.8 9.7 13.8 15.8 17.8 6.2 4.1 12.4 6.1 18.7 6.1s11.7-0.5 16.3-1.4c4.6-1 8.8-2.4 12.8-4.3 1.7-12.8 6.4-22.6 14-29.4 -10.8-1.1-20.6-2.9-29.3-5.1 -8.7-2.3-17.6-6-26.8-11.1 -9.2-5.1-16.9-11.5-23-19.1 -6.1-7.6-11.1-17.6-15-30 -3.9-12.4-5.9-26.7-5.9-42.8 0-23 7.5-42.6 22.6-58.8 -7-17.3-6.4-36.7 2-58.2 5.5-1.7 13.7-0.4 24.6 3.9 10.9 4.3 18.8 8 23.8 11 5 3 9.1 5.6 12.1 7.7 17.7-4.9 36-7.4 54.8-7.4 18.8 0 37.1 2.5 54.8 7.4l10.8-6.9c7.4-4.6 16.2-8.8 26.3-12.6 10.1-3.8 17.8-4.9 23.1-3.1 8.6 21.5 9.3 40.9 2.3 58.2 15 16.2 22.6 35.8 22.6 58.8 0 16.2-2 30.5-5.9 43 -3.9 12.5-8.9 22.5-15.1 30 -6.2 7.5-13.9 13.8-23.1 19 -9.2 5.1-18.2 8.9-26.8 11.1 -8.7 2.3-18.4 4-29.3 5.1 9.9 8.6 14.8 22.1 14.8 40.5v68.2c0 3.2 0.5 5.9 1.4 7.9 1 2 2.5 3.4 4.6 4.1 2.1 0.8 3.9 1.2 5.6 1.4 1.6 0.2 3.9 0.3 7 0.3h64c22.6 0 42-8 58.1-24.1 16.1-16.1 24.1-35.5 24.1-58.1V82.2C438.5 59.6 430.5 40.2 414.4 24.1z"}),Object(c.jsx)("path",{d:"M86.8 319.2c-1.3 0.9-1.1 2.5 0.6 4.6 1.9 1.9 3.4 2.2 4.6 0.9 1.3-0.9 1.1-2.5-0.6-4.6C89.5 318.3 87.9 318 86.8 319.2z"}),Object(c.jsx)("path",{d:"M77.4 312.1c-0.6 1.3 0.1 2.5 2 3.4 1.5 1 2.8 0.8 3.7-0.6 0.6-1.3-0.1-2.5-2-3.4C79.2 310.9 77.9 311.1 77.4 312.1z"}),Object(c.jsx)("path",{d:"M95.6 330.3c-1.7 0.9-1.7 2.7 0 5.1 1.7 2.5 3.3 3.1 4.9 2 1.7-1.3 1.7-3.1 0-5.4C99 329.6 97.4 329 95.6 330.3z"}),Object(c.jsx)("path",{d:"M105.6 343.2c-1.7 1.5-1.3 3.3 1.1 5.4 2.3 2.3 4.2 2.6 5.7 0.8 1.5-1.5 1.1-3.3-1.1-5.4C109.1 341.8 107.2 341.5 105.6 343.2z"})]})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/gino-zaccardelli-06887418/",className:"social-icon-link",children:Object(c.jsx)("svg",{height:"48",viewBox:"0 0 512 512",width:"48",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"})})}),Object(c.jsx)("a",{href:"https://www.instagram.com/toomuchbob/",className:"social-icon-link",children:Object(c.jsxs)("svg",{height:"48",viewBox:"0 0 511 511.9",width:"48",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("path",{d:"m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"}),Object(c.jsx)("path",{d:"m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"}),Object(c.jsx)("path",{d:"m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"})]})})]})]})}),Object(c.jsx)("div",{id:"about-me-pixel"})]})},m=(i(14),i.p+"static/media/HW_4.9a5de047.gif"),x=i.p+"static/media/Proj1.ef2c3f9b.gif",O=i.p+"static/media/HW_13.f3da302a.png",f=i.p+"static/media/Project_2.3a7d075a.png",g=i.p+"static/media/HW_6.9b76a7b8.png",v=i.p+"static/media/StudyMate.5f11fec9.png";var w=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"title",id:"portfolio-title",children:"My Work"}),Object(c.jsx)("div",{className:"content-container",id:"portfolio",children:Object(c.jsxs)("div",{id:"portfolio-content",children:[Object(c.jsx)("div",{className:"portfolio-image",children:Object(c.jsx)("a",{href:"https://floating-journey-44508.herokuapp.com/",children:Object(c.jsx)("img",{src:v,alt:"StudyMate",id:"StudyMate-id"})})}),Object(c.jsx)("div",{className:"portfolio-image",children:Object(c.jsx)("a",{href:"https://github.com/DanielGerrald/Project_1",children:Object(c.jsx)("img",{src:x,alt:"Project 1",id:"project1-id"})})}),Object(c.jsx)("div",{className:"portfolio-image",children:Object(c.jsx)("a",{href:"https://github.com/Toomuchbob/06-Server-Side-APIs",children:Object(c.jsx)("img",{src:g,alt:"Homework 6",id:"homework-6-id"})})}),Object(c.jsx)("div",{className:"portfolio-image",children:Object(c.jsx)("a",{href:"https://github.com/Toomuchbob/04-Code-Quiz",children:Object(c.jsx)("img",{src:m,alt:"Homework 4",id:"homework-4-id"})})}),Object(c.jsx)("div",{className:"portfolio-image",children:Object(c.jsx)("a",{href:"https://github.com/Toomuchbob/Eat-Da-Burger",children:Object(c.jsx)("img",{src:O,alt:"Homework 13",id:"homework-13-id"})})}),Object(c.jsx)("div",{className:"portfolio-image",children:Object(c.jsx)("a",{href:"http://project-2-agrc.herokuapp.com/",children:Object(c.jsx)("img",{src:f,alt:"Project 2",id:"project2-13-id"})})})]})}),Object(c.jsx)("div",{id:"portfolio-pixel"})]})};i(15);var S=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"title",id:"about-this-title",children:"About This Page"}),Object(c.jsx)("div",{className:"content-container",id:"about-this",children:Object(c.jsx)("div",{id:"about-this-content",children:Object(c.jsxs)("div",{id:"flaticon",children:["Icons made by ",Object(c.jsx)("a",{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect",children:"Pixel perfect"}),"\xa0from\xa0",Object(c.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com "})]})})}),Object(c.jsx)("div",{id:"about-this-pixel"})]})},k=(i(16),function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),i=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){n(window.scrollY>0)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(c.jsxs)("div",{className:"header ".concat(i?"hide-header":""),children:[Object(c.jsx)("span",{className:"text",children:"Portfolio of "}),Object(c.jsx)("span",{className:"text",children:"Gino "}),Object(c.jsx)("span",{className:"text",children:"Zaccardelli "})]})}),C=(i(17),i.p+"static/media/gino.6c3a5a12.png");var N=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),i=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){n(window.scrollY>0)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(c.jsx)("div",{class:"photo crop-circle ".concat(i?"hide-photo":""),children:Object(c.jsx)("img",{src:C,alt:"Gino Zaccardelli"})})};i(18);var y=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsxs)(h,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(p,{})]}),Object(c.jsx)(N,{}),Object(c.jsx)(u,{}),Object(c.jsx)(w,{}),Object(c.jsx)(S,{})]})},M=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;i(e),c(e),s(e),n(e),o(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),M()}],[[19,1,2]]]);
//# sourceMappingURL=main.570a6df0.chunk.js.map