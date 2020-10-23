var card1,card2,card3,card4,card5;
var card6,card7,card8,card9,card10;
var card11,card12,card13,card14,card15;
var card16,card17,card18,card19,card20;
var card21,card22,card23,card24,card25;
var card26,card27,card28,card29;

var backgroundimg,coverimg;
var pic1;
function preload(){
backgroundimg=loadImage("pictures/background img.jpg");
coverimg=loadImage("pictures/cover img.png");
pic1=loadImage("pictures/pic1.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  card1= createSprite(displayWidth/4-250,100, 80,80);
  card1.addImage("cover1",coverimg);
  card1.scale=0.7
  card2= createSprite(displayWidth/4-50,100, 200,200);
  card2.addImage("cover2",coverimg);
  card2.scale=0.7;
  card3= createSprite(displayWidth/4+150,100, 80,80);
  card3.addImage("cover3",coverimg);
  card3.scale=0.7;
  card4= createSprite(displayWidth/4+350,100, 80,80);
  card4.addImage("cover4",coverimg);
  card4.scale=0.7;
  card5= createSprite(displayWidth/4+550,100, 80,80);
  card5.addImage("cover5",coverimg);
  card5.scale=0.7;
  card6= createSprite(displayWidth/4+750,100, 80,80);
  card6.addImage("cover6",coverimg);
  card6.scale=0.7;
  card7= createSprite(displayWidth/4+950,100,150, 80,80);
  card7.addImage("cover7",coverimg);
  card7.scale=0.7
  card8= createSprite(displayWidth/4-250,300, 80,80);
  card8.addImage("cover8",coverimg);
  card8.scale=0.7
  card9= createSprite(displayWidth/4-50,300, 200,200);
  card9.addImage("cover9",coverimg);
  card9.scale=0.7;
  card10= createSprite(displayWidth/4+150,300, 80,80);
  card10.addImage("cover10",coverimg);
  card10.scale=0.7;
  card11= createSprite(displayWidth/4+350,300, 80,80);
  card11.addImage("cover11",coverimg);
  card11.scale=0.7;
  card12= createSprite(displayWidth/4+550,300, 80,80);
  card12.addImage("cover12",coverimg);
  card12.scale=0.7;
  card13= createSprite(displayWidth/4+750,300, 80,80);
  card13.addImage("cover13",coverimg);
  card13.scale=0.7
  card14= createSprite(displayWidth/4+950,300, 80,80);
  card14.addImage("cover14",coverimg);
  card14.scale=0.7
  card15= createSprite(displayWidth/4-250,500, 80,80);
  card15.addImage("cover15",coverimg);
  card15.scale=0.7
  card16= createSprite(displayWidth/4-50,500, 200,200);
  card16.addImage("cover16",coverimg);
  card16.scale=0.7;
  card17= createSprite(displayWidth/4+150,500, 80,80);
  card17.addImage("cover17",coverimg);
  card17.scale=0.7;
  card18= createSprite(displayWidth/4+350,500, 80,80);
  card18.addImage("cover18",coverimg);
  card18.scale=0.7;
  card19= createSprite(displayWidth/4+550,500, 80,80);
  card19.addImage("cover19",coverimg);
  card19.scale=0.7;
  card20= createSprite(displayWidth/4+750,500, 80,80);
  card20.addImage("cover20",coverimg);
  card20.scale=0.7
  card21 = createSprite(displayWidth/4+950,500, 80,80);
  card21.addImage("cover21",coverimg);
  card21.scale=0.7
  card22= createSprite(displayWidth/4-250,700, 80,80);
  card22.addImage("cover2",coverimg);
  card22.scale=0.7
  card23= createSprite(displayWidth/4-50,700, 200,200);
  card23.addImage("cover23",coverimg);
  card23.scale=0.7;
  card24= createSprite(displayWidth/4+150,700, 80,80);
  card24.addImage("cover24",coverimg);
  card24.scale=0.7;
  card25= createSprite(displayWidth/4+350,700, 80,80);
  card25.addImage("cover25",coverimg);
  card25.scale=0.7;
  card26= createSprite(displayWidth/4+550,700, 80,80);
  card26.addImage("cover26",coverimg);
  card26.scale=0.7;
  card27= createSprite(displayWidth/4+750,700, 80,80);
  card27.addImage("cover27",coverimg);
  card27.scale=0.7
  card28= createSprite(displayWidth/4+950,700, 80,80);
  card28.addImage("cover28",coverimg);
  card28.scale=0.7
 
  
 
  


  

 
}

function draw() {
  background(backgroundimg);  


if (mousePressedOver(card1)){
card1.changeImage("1card",pic1)
}

drawSprites();
}