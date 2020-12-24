var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = []

var c1,c2,c3,c4,c5
var a=2

var divisionHeight=300;
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  c1=new Particle(random(10,790),0)
 
  for(var i = 50; i < 750; i=i+50){
    plinkos.push(new Plinko(i,30))
    plinkos.push(new Plinko(i+25,90+10))
    plinkos.push(new Plinko(i,150+20))
    plinkos.push(new Plinko(i+25,210+30))
  }

  for(var d=0;d<880;d=d+80){
    divisions.push(new Divisions(d,600,5,400))
    console.log(divisions)
  } 

}
 


function draw() {
  background("black");

  if(score===0){
  textSize(20)
  text("Score : "+score,20,350);
  fill('green')
  text('100         100         300        300        500         500         300         300        100       100',20,775)
  textSize(10)
  text('Press space to get another chance',300,10)
  Engine.update(engine);

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display()
  }

  for(var d=0;d<divisions.length;d++){
    divisions[d].display()
  }

  c1.display()


  if(a!=null){

  if(c1.body.position.y> 700&&c1.body.position.x<160&&c1.body.position.x>0 ||c1.body.position.y> 700&&c1.body.position.x>640&&c1.body.position.x<800 ){
    score=score+100
    c1.body=null
  }
  else if(c1.body.position.y> 700&&c1.body.position.x>160&&c1.body.position.x<320 ||c1.body.position.y> 700&&c1.body.position.x<640&&c1.body.position.x>480 ){
    score=score+300
    c1.body=null
  }
  else if(c1.body.position.y> 700&&c1.body.position.x>320&&c1.body.position.x<480 ){
    score=score+500
    c1.body=null
  }

}
  }

  textSize(40)

  if(score===100){
    text('Good Effort',300,400)
    textSize(20)
    text('Your score is '+score,325,450)
  }

  if(score===300){
    textSize(40)
    text('Well Done!',300,400)

    textSize(20)
    text('Your score is '+score,325,450)
  }

  if(score===500){
    textSize(40)
    text("You're a pro!",300,400)

    textSize(20)
    text('Your score is '+score,325,450)
  }

}

function keyPressed(){
  if(keyCode==32){
    window.location.reload()
  }
}
