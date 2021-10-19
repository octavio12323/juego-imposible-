var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0d1703cd-8968-4c8f-96cc-8e8fee352762","bb51f583-5109-4675-94c7-5bac1cd0e7ef","a8c40aef-4ff3-4396-81fc-3e2fa6f7d4e6","7636590a-9cab-4354-b2e1-596640d1b6cc","af11a9a7-3077-44c5-8fc0-6a2ab656d91f","9806316b-7c5b-4de2-a9dc-580389401c20","fed8b414-5ab1-480a-806e-7d34dce760ed"],"propsByKey":{"0d1703cd-8968-4c8f-96cc-8e8fee352762":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"bb51f583-5109-4675-94c7-5bac1cd0e7ef":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"a8c40aef-4ff3-4396-81fc-3e2fa6f7d4e6":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"7636590a-9cab-4354-b2e1-596640d1b6cc":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"af11a9a7-3077-44c5-8fc0-6a2ab656d91f":{"name":"kidportrait_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JGw3x8mqIDdntLjBneM5sF1rRaODdxDs/category_faces/kidportrait_09.png","frameSize":{"x":298,"y":366},"frameCount":1,"looping":true,"frameDelay":2,"version":"JGw3x8mqIDdntLjBneM5sF1rRaODdxDs","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":298,"y":366},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JGw3x8mqIDdntLjBneM5sF1rRaODdxDs/category_faces/kidportrait_09.png"},"9806316b-7c5b-4de2-a9dc-580389401c20":{"name":"building_25_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JEI2Wj2WzDlmJQiGpaOarpdUVJuhckq2/category_buildings/building_25.png","frameSize":{"x":394,"y":225},"frameCount":1,"looping":true,"frameDelay":2,"version":"JEI2Wj2WzDlmJQiGpaOarpdUVJuhckq2","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":225},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JEI2Wj2WzDlmJQiGpaOarpdUVJuhckq2/category_buildings/building_25.png"},"fed8b414-5ab1-480a-806e-7d34dce760ed":{"name":"building_22_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9LyJ_mGcYV.o7Ds5C9_a_MGNOed05FQp/category_buildings/building_22.png","frameSize":{"x":399,"y":266},"frameCount":1,"looping":true,"frameDelay":2,"version":"9LyJ_mGcYV.o7Ds5C9_a_MGNOed05FQp","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":266},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9LyJ_mGcYV.o7Ds5C9_a_MGNOed05FQp/category_buildings/building_22.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var shop = createSprite(375, 190, 52, 140);

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
  
  car1.velocityY = 5;
  car2.velocityY = 6;
  car3.velocityY = -7;
  car4.velocityY = -8;
 

function draw() {
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("red");
  rect(0,120,52,140);
  shop.shapeColor = "yellow";
  car1.setAnimation("car_blue_1");
  car1.scale = 0.2;
  car2.setAnimation("car_yellow_1");
  car2.scale = 0.2;
  car3.setAnimation("car_red_1");
  car3.scale = 0.2;
  car4.setAnimation("car_green_1");
  car4.scale = 0.2;
  sam.setAnimation("kidportrait_09_1");
  sam.scale = 0.08;
  shop.setAnimation("building_22_1");
  shop.scale = 0.3;
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  sam.bounceOff(boundary1);
  sam.bounceOff(boundary2);
  
 
  if(keyDown("right")){
    sam.x = sam.x + 2;
  }
  if(keyDown("left")){
    sam.x = sam.x - 2;
  }
  if (keyDown("down")) {
    sam.y = sam.y + 2;
  }
  if (keyDown("up")) {
    sam.y = sam.y - 2;
  }
  if (sam.isTouching(shop)) {
    text("¡Que bien llegaste!", 150, 200);
    car1.y = 180;
    car2.y = 180;
    car3.y = 180;
    car4.y = 180;
  }
  if(life==5)
        {
          fill("maroon");
          textSize(18);
          text("¡Fin del juego!",170,160);
          car1.y = 180;
          car2.y = 180;
          car3.y = 180;
          car4.y = 180;
        }
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
  
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
