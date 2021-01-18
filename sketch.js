const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,tree;
var boy,boyImg;
var stone;
var slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload () {
    //treeImg = loadImage ("tree.png");
    boyImg = loadImage ("boy.png");
}

function setup () {
    createCanvas(1000,650);

    engine = Engine.create();
    world = engine.world;

    tree = new Tree (775,368,45,10);

    ground = new Ground();

    stone = new Stone(100,460,30);

    
    mango1 = new Mango(600,290,40);
    mango2 = new Mango(855,325,40);
    mango3 = new Mango(670,260,40);
    mango4 = new Mango(730,200,40);
    mango5 = new Mango(710,320,40);
    mango6 = new Mango(780,250,40);
    mango7 = new Mango(825,170,40);
    mango8 = new Mango(880,260,40);
    mango9 = new Mango(940,220,40);
    mango10 = new Mango(980,305,40);

    slingshot = new SlingShot(stone.body,{x : 140,y : 450});

   // tree = createSprite(775,368);
    //tree.addImage(treeImg);
    //tree.scale = 0.42;

    boy = createSprite(160,550);
    boy.addImage(boyImg);
    boy.scale = 0.12;

    Engine.run(engine);
}

function draw () {
    rectMode(CENTER);
    background("light blue");

    fill("black");
    textSize(18);

    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    detectCollision(stone,mango4);
    detectCollision(stone,mango5);
    detectCollision(stone,mango6);
    detectCollision(stone,mango7);
    detectCollision(stone,mango8);
    detectCollision(stone,mango9);
    detectCollision(stone,mango10);

    tree.display();

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();

    stone.display();

    ground.display();


    

    slingshot.display();

    

   drawSprites();
//    tree.display();

    
}

function detectCollision(stone,mango){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}


function mouseDragged () {
    Matter.Body.setPosition(stone.body,{x : mouseX, y : mouseY});
}

function mouseReleased () {
    slingshot.fly();
}

/*function detectCollision (lstone,lmango) {
    if (lstone.body.position.x - lmango.body.position.x <lmango.diametre + lstone.diametre
        && lmango.body.position.x - lstone.body.position.x < lmango.diametre + lstone.diametre
        && lstone.body.position.y - lmango.body.position.y < lmango.diametre + lstone.diametre
        && lmango.body.position.y - lstone.body.position.y < lmango.diametre + lstone.diametre){
            Matter.Body.setStatic(mango1.body,false);
        }
    }*/

function keyPressed () {
    if (keyCode === 32) {
       Matter.Body.setPosition(stone.body,{x : 140, y : 450});
     slingshot.attach(stone.body);
   }
}