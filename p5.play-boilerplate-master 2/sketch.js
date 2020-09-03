var car_1,car_2,car_3,car_4;
var wall_1,wall_2,wall_3;
var block_1,block_2,block_3,block_4;
var speed_1,speed_2,speed_3,speed_4;
var  weight_1,weight_2,weight_3,weight_4;
var t1,t2,t3,t4;
function setup() {
  createCanvas(800,400);
  speed_1=Math.round(random(55,90));
  weight_1=Math.round(random(400,1500));
  
  speed_2=Math.round(random(55,90));
  weight_2=Math.round(random(400,1500));
  
  speed_3=Math.round(random(55,90));
  weight_3=Math.round(random(400,1500));
  
  speed_4=Math.round(random(55,90));
  weight_4=Math.round(random(400,1500));
  
  car_1 = createSprite(50,50,40,20);
  car_1.velocityX = speed_1/4;
  car_2 = createSprite(50,150,40,20);
  car_2.velocityX = speed_2/4;
  car_3 = createSprite(50,250,40,20);
  car_3.velocityX = speed_3/4;
  car_4 = createSprite(50,350,40,20);
  car_4.velocityX = speed_4/4;
  wall_1=createSprite(500,100,1600,5);
  wall_1.shapeColor = "white";
  wall_2=createSprite(500,200,1600,5);
  wall_2.shapeColor = "white";
  wall_3=createSprite(500,300,1600,5);
  wall_3.shapeColor = "white";
  block_1 = createSprite(750,50,20,70);
  block_1.shapeColor = "blue";
  block_2 = createSprite(750,150,20,70);
  block_2.shapeColor = "blue";
  block_3 = createSprite(750,250,20,70);
  block_3.shapeColor = "blue";
  block_4 = createSprite(750,350,20,70);
  block_4.shapeColor = "blue";
  t1=0;
  t2=0;
  t3=0;
  t4=0;
}
function draw() {
  background(0,0,0);  
  text("Speed: "+speed_1+" mph",50,25);
  text("Weight: "+weight_1 + " lbs",50,75);
  
  text("Speed: "+speed_2+" mph",50,125);
  text("Weight: "+weight_2 + " lbs",50,175);
  
  text("Speed: "+speed_3+" mph",50,225);
  text("Weight: "+weight_3 + " lbs",50,275);
  
  text("Speed: "+speed_4+" mph",50,325);
  text("Weight: "+weight_4 + " lbs",50,375);
  
  if (t1===1){
  text("Deformation: "+ Math.round((0.5*weight_1*speed_1*speed_1)/22500),600,25);
  }
  
  if (t2===1){
    text("Deformation: "+ Math.round((0.5*weight_2*speed_2*speed_2)/22500),600,125);
  }
  
  if (t3===1){
    text("Deformation: "+ Math.round((0.5*weight_3*speed_3*speed_3)/22500),600,225);
  }
  
  if (t4===1){
  text("Deformation: "+ Math.round((0.5*weight_4*speed_4*speed_4)/22500),600,325);
  }
  
  if (car_1.isTouching(block_1)){
    t1 = 1;
  }
  
  if (car_2.isTouching(block_2)){
    t2=1;
  }
  
  if (car_3.isTouching(block_3)){
    t3=1;
  }
  
  if (car_4.isTouching(block_4)){
    t4=1;
  }
  
  
  if (car_1.isTouching(block_1)) {
    car_1.velocityX=0;
    var deformation_1= (0.5* weight_1 * speed_1 * speed_1)/22500;
      if (deformation_1>180) {
        car_1.shapeColor = color(255,0,0);
      
      }
    
      if (deformation_1<180 && deformation_1>100 ){
        car_1.shapeColor = color(230,230,0);
      }
    
      if (deformation_1<100){
        car_1.shapeColor = color(0,255,0);
      }
    
  }
  
  if (car_2.isTouching(block_2)) {
    car_2.velocityX=0;
    var deformation_2= (0.5* weight_2 * speed_2 * speed_2)/22500;
      if (deformation_2>180) {
        car_2.shapeColor = color(255,0,0);
      
      }
    
      if (deformation_2<180 && deformation_2>100 ){
        car_2.shapeColor = color(230,230,0);
      }
    
      if (deformation_2<100){
        car_2.shapeColor = color(0,255,0);
      }
    
  }
  
  
  if (car_3.isTouching(block_3)) {
    car_3.velocityX=0;
    var deformation_3= (0.5* weight_3 * speed_3 * speed_3)/22500;
      if (deformation_3>180) {
        car_3.shapeColor = color(255,0,0);
      
      }
    
      if (deformation_3<180 && deformation_3>100 ){
        car_3.shapeColor = color(230,230,0);
      }
    
      if (deformation_3<100){
        car_3.shapeColor = color(0,255,0);
      }
    
  }
  
  if (car_4.isTouching(block_4)) {
    car_4.velocityX=0;
    var deformation_4= (0.5* weight_4 * speed_4 * speed_4)/22500;
      if (deformation_4>180) {
        car_4.shapeColor = color(255,0,0);
      
      }
    
      if (deformation_4<180 && deformation_4>100 ){
        car_4.shapeColor = color(230,230,0);
      }
    
      if (deformation_4<100){
        car_4.shapeColor = color(0,255,0);
      }
    
  }
  
  car_1.collide(block_1);
  car_2.collide(block_2);
  car_3.collide(block_3);
  car_4.collide(block_4);
    
  
  drawSprites();
}
