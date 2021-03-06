import React, { useContext, useState } from "react";
import Sketch from "react-p5";
import { NavContext } from "../../contexts/NavContext";

function NavCanvas() {

  const { nav, setNav } = useContext(NavContext);

  const [state, setState] = useState({
    //initialize spriteSheet and spriteData
    spriteSheet: undefined,
    spriteData: undefined,
    currentSprite: undefined,
    spriteX: 0,
    spriteY: 0,
    spriteSpeed: 0,

    //initialize animation arrays
    idleAnim: [],
    pointingAnim: [],
    walkAnim: []
  });

  const destructureSpriteData = () => {

    //destructure spriteSheet into individual animations
    if (state.spriteData.idle) {
      state.spriteData.idle.forEach(e => {
        let { x, y, w, h } = e;
        let img = state.spriteSheet.get(x, y, w, h);
        state.idleAnim.push(img);
      });
    };

    //destructure spriteSheet into individual animations
    if (state.spriteData.pointing) {
      state.spriteData.pointing.forEach(e => {
        let { x, y, w, h } = e;
        let img = state.spriteSheet.get(x, y, w, h);
        state.pointingAnim.push(img);
      });
    };

    //destructure spriteSheet into individual animations
    if (state.spriteData.walk) {
      state.spriteData.walk.forEach(e => {
        let { x, y, w, h } = e;
        let img = state.spriteSheet.get(x, y, w, h);
        state.walkAnim.push(img);
      });
    };
  };

  //preload async data
  let preload = p5 => {

    if (p5.windowWidth >= 1280) {
      state.spriteSheet = p5.loadImage('./assets/sprite/p5guy_300.png');
      state.spriteData = p5.loadJSON('./assets/sprite/p5guy_300.json');
    } else if (p5.windowWidth >= 812) {
      state.spriteSheet = p5.loadImage('./assets/sprite/p5guy_200.png');
      state.spriteData = p5.loadJSON('./assets/sprite/p5guy_200.json');
    } else {
      state.spriteSheet = p5.loadImage('./assets/sprite/p5guy.png');
      state.spriteData = p5.loadJSON('./assets/sprite/p5guy.json');
    }

  };

  //setup canvas and components
  let setup = (p5, canvasParentRef) => {

    //initialize canvas
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.frameRate(30);

    destructureSpriteData(p5);

  };

  let windowResized = p5 => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  //draw to canvas
  let draw = p5 => {

    p5.background('#1e1e1e');

    state.currentSprite = state.idleAnim[p5.floor(p5.frameCount * 0.4) % state.idleAnim.length];
    
    if (nav) {
      if (p5.mouseX > nav.left && p5.mouseX < nav.right && p5.mouseY > nav.top && p5.mouseY < nav.bottom) {
        state.currentSprite = state.pointingAnim[p5.floor(p5.frameCount * 0.4) % state.pointingAnim.length];
      } else {
        state.currentSprite = state.idleAnim[p5.floor(p5.frameCount * 0.4) % state.idleAnim.length];
      };
    };

    //assign sprite Y position to bottom of links bounding box
    if (nav) {
      state.spriteY = nav.bottom + window.scrollY;
    };

    let diff = p5.mouseX - state.spriteX;
    state.spriteSpeed = Math.sign(diff) + (diff) / 30;

    if (Math.abs(diff) < 1) {
      state.spriteSpeed = 0;
    } else {
      state.spriteX = state.spriteX + state.spriteSpeed;
    };

    if (state.currentSprite) {
      p5.image(state.currentSprite, state.spriteX, state.spriteY);
    };

  };

  return (
    <Sketch preload={preload} setup={setup} windowResized={windowResized} draw={draw} style={{ position: 'absolute', zIndex: -1 }} />
  );
};

export default NavCanvas;