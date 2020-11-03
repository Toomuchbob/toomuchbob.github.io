import React, { useContext } from "react";
import Sketch from "react-p5";
import { NavContext } from "../../contexts/NavContext";

function NavCanvas() {

  const value = useContext(NavContext);

  //initialize spriteSheet and spriteData
  let spriteSheet;
  let spriteData;
  let currentSprite;

  //initialize sprite position and movement
  let spriteX = 100;
  let spriteY = 96;
  let spriteSpeed = 0;

  //initialize animation arrays
  let idleAnim = [];
  let pointingAnim = [];
  let walkAnim = [];

  //preload async data
  let preload = (p5) => {
    spriteSheet = p5.loadImage('./assets/sprite/p5guy.png');
    spriteData = p5.loadJSON('./assets/sprite/p5guy.json');
  };

  //setup canvas and components
  let setup = (p5, canvasParentRef) => {

    //initialize canvas
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.frameRate(30);

    //destructure spriteSheet into individual animations
    if (spriteData.idle) {
      spriteData.idle.forEach(e => {
        let { x, y, w, h } = e;
        let img = spriteSheet.get(x, y, w, h);
        idleAnim.push(img);
      });
    };

    //destructure spriteSheet into individual animations
    if (spriteData.pointing) {
      spriteData.idle.forEach(e => {
        let { x, y, w, h } = e;
        let img = spriteSheet.get(x, y, w, h);
        pointingAnim.push(img);
      });
    };

    //destructure spriteSheet into individual animations
    if (spriteData.walk) {
      spriteData.idle.forEach(e => {
        let { x, y, w, h } = e;
        let img = spriteSheet.get(x, y, w, h);
        walkAnim.push(img);
      });
    };

  };

  //draw to canvas
  let draw = (p5) => {

    p5.background('#261c3d');
    currentSprite = idleAnim[p5.frameCount % idleAnim.length];

    let diff = p5.mouseX - spriteX;
    spriteSpeed = Math.sign(diff) + (diff) / 100;

    if (Math.abs(diff) < 0) {
      spriteSpeed = 0;
    } else {
      spriteX = spriteX + spriteSpeed;
    };

    p5.image(currentSprite, spriteX, spriteY);

  };

  return (
    <Sketch preload={preload} setup={setup} draw={draw} className="App" style={{ position: 'absolute', zIndex: -1 }} />
  );
};

export default NavCanvas;