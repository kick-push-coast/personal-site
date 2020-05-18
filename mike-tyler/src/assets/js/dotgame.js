//// GAME OPTIONS ////
var ballDiameter = 6;
var mainDiameter = 10;
var ballsCount = 120;
var maxBallSpeed = 2.5;
var maxMainSpeed = 6;
/////////////////////




var timeStart = new Date();
var timeDiff, timeCurrent;

var frictionChecked = 0;
var ballsCreated = 0;
var gameStarted = 0;
var bestTime = 0.0;

var img = new Image();

img.onload = function() {
  
}
img.src = "https://p13.zdassets.com/hc/theme_assets/723138/200147841/Cludot6.svg";

var boundary, spawnBoundary, spawnOffset, initialPos;
boundary = 0;
spawnBoundary = -20;
spawnOffset = -20;
initialPos = 20;

var initX = initialPos;
var initY = initialPos;

var balls = [];
var keys = [];
var colors = ['#000000', '#333333', '#414141', '#565656'];

//Generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

//Object Constructors

function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}

function Ball(x, y, velX, velY, color, size, exists) {
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size = size;
  this.type = "Ball";
}
Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

function Evil() {
  Shape.call(this, width/2, height/2, 0, 0, true);
  this.color = '#5D469B';
  this.size = mainDiameter;
  this.maxSpeed = maxMainSpeed;
  this.free = true;
  this.type = "Evil";
}
Evil.prototype = Object.create(Shape.prototype);
Evil.prototype.constructor = Evil;

//Shape Methods

//Draw
Shape.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}


//Update Ball
Ball.prototype.update = function() {
  if ((this.x + this.size) >= width + boundary) {
    this.x = width - this.size + boundary;
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= -boundary) {
    this.x = this.size - boundary;
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height + boundary) {
    this.y = height - this.size + boundary;
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= -boundary) {
    this.y = this.size -boundary;
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
  if(frictionChecked) {
    this.velX *= 0.99;
    this.velY *= 0.99;
  }
}

//Update Evil
Evil.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.x = width - this.size;
    this.velX = 0;
  }

  if ((this.x - this.size) <= 0) {
    this.x = this.size;
    this.velX = 0;
  }

  if ((this.y + this.size) >= height) {
    this.y = height - this.size;
    this.velY = 0;
  }

  if ((this.y - this.size) <= 0) {
    this.y = this.size;
    this.velY = 0;
  }
  
  if (this.free) {
    this.velX *= 0.95;
    this.velY *= 0.95;

    whatKey();
    this.x += this.velX;
    this.y += this.velY;
    this.collisionDetect();
  }
  else {
    if (keys[32]) {
    
      reset();
    }
  }
}

//Collision Detection
Shape.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var collider = balls[j];
      var dx = this.x - collider.x;
      var dy = this.y - collider.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + collider.size) {      
        handleBounce(this, collider);
      }
    }
  }
}

//Handle Bounce
function handleBounce(ball1, ball2) {
  
  if(ball1.type === "Evil") {
    gameover.style.display = 'flex';
    if (timeDiff > bestTime) {
      bestTime = timeDiff;
      hiScore.style.display = 'flex';
    }
    ball1.velX = 0;
    ball1.velY = 0;
    ball1.free = false;
    for (i = 0; i < balls.length; i++) {
      balls[i].velX = 0;
      balls[i].velY = 0;
    }
  }
  
  var dx = ball1.x - ball2.x;
  var dy = ball1.y - ball2.y;
  
  var collAngle = Math.atan2(dy, dx);
  
  var magnitude1 = Math.sqrt(ball1.velX * ball1.velX + ball1.velY * ball1.velY);
  var magnitude2 = Math.sqrt(ball2.velX * ball2.velX + ball2.velY * ball2.velY);
  
  var angle1 = Math.atan2(ball1.velY, ball1.velX);
  var angle2 = Math.atan2(ball2.velY, ball2.velX);
  
  var newVelX1 = magnitude1 * Math.cos(angle1 - collAngle);
  var newVelY1 = magnitude1 * Math.sin(angle1 - collAngle);
  var newVelX2 = magnitude2 * Math.cos(angle2 - collAngle);
  var newVelY2 = magnitude2 * Math.sin(angle2 - collAngle);
  
  var finalVelX1 = ((ball1.size - ball2.size) * newVelX1 + (ball2.size + ball2.size) * newVelX2) / (ball1.size + ball2.size);
  var finalVelX2 = ((ball1.size + ball1.size) * newVelX1 + (ball2.size - ball1.size) * newVelX2) / (ball1.size + ball2.size);
  var finalVelY1 = newVelY1;
  var finalVelY2 = newVelY2;
  
  ball1.velX = Math.cos(collAngle)*finalVelX1+Math.cos(collAngle+Math.PI/2)*finalVelY1;
  ball1.velY = Math.sin(collAngle)*finalVelX1+Math.sin(collAngle+Math.PI/2)*finalVelY1;
  ball2.velX = Math.cos(collAngle)*finalVelX2+Math.cos(collAngle+Math.PI/2)*finalVelY2;
  ball2.velY = Math.sin(collAngle)*finalVelX2+Math.sin(collAngle+Math.PI/2)*finalVelY2;
  
  ball1.x = ball1.x + ball1.velX;
  ball1.y = ball1.y + ball1.velY;
  ball2.x = ball2.x + ball2.velX;
  ball2.y = ball2.y + ball2.velY;
  
}

//Detect Focus
var totalTimeAway = 0;
var awayStart, awayEnd;
var goneAway = 0;

window.onfocus = function() {
    if (goneAway) {
      awayEnd = new Date();
      totalTimeAway += awayEnd - awayStart;
      goneAway = 0;
    }
};
window.onblur = function() {
    goneAway = 1;
    awayStart = new Date();
};

//Detect Keyup/Keydown
window.addEventListener("keydown", function (e) {
    if (document.activeElement === canvas) {
        e.preventDefault();
    }
    keys[e.keyCode] = true;
});
window.addEventListener("keyup", function (e) {
    if (document.activeElement === canvas) {
        e.preventDefault();
    }
    keys[e.keyCode] = false;
});

function whatKey() {
  if (keys[37]) {
    //velX = -10;
    if (evil.velX > -evil.maxSpeed) {
      evil.velX -= 0.6;
    }
  }

  if (keys[39]) {
    //velX = 10;
    if (evil.velX < evil.maxSpeed) {
      evil.velX += 0.6;
    }
  }
  if (keys[40]) {
    //velY = 10;
    if (evil.velY < evil.maxSpeed) {
      evil.velY += 0.6;
    }
  }
  if (keys[38]) {
    //velY = -10;
    if (evil.velY > -evil.maxSpeed) {
      evil.velY -= 0.6;
    }
  }
  if (keys[32] && !gameStarted) {
    timeStart = new Date();
    menu.style.display = 'none';
    gameStarted = 1;
    totalTimeAway = 0;
  }
}

//Reset balls
function reset() {
  evil.x = width/2;
  evil.y = height/2;
  evil.free = true;
  evil.velX = 0;
  evil.velY = 0;
  balls = [];
  ballsCreated = 0;
  gameover.style.display = 'none';
  hiScore.style.display = 'none';
  timeStart = new Date();
  totalTimeAway = 0;
}

//Update time
function updateTime(){  
  timeCurrent = new Date();
  timeDiff = timeCurrent - timeStart - totalTimeAway;
  timerCount.textContent = (timeDiff / 1000).toFixed(1);
}

//Initiate Balls
function initiateBalls() {
  var circ = ((width - 40) + (height - 40))*2;
  var side1 = width - 40;
  var side2 = height - 40;
  var side3 = width - 40;
  var side4 = height - 40;
  var xPlacement = initX;
  var yPlacement = initY;
  var forward = true;
  var seg = (circ / (ballsCount));
  
  while (balls.length < ballsCount && ballsCreated == 0) {
    var ball = new Ball(
      xPlacement,
      yPlacement,
      random(-maxBallSpeed, maxBallSpeed),
      random(-maxBallSpeed, maxBallSpeed),
      // 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      colors[random(0,colors.length)],
      ballDiameter,
      true
    );
    balls.push(ball);
    
    if (side1 > 0) {
      if ((xPlacement + seg) <= (width - 20)) {
        xPlacement += seg;
        side1 -= seg;
      } 
      else {
        yPlacement += (seg - side1);
        side2 -= (seg - side1);
        side1 = 0;
        xPlacement = (width - 20);
      }      
    }
    else if (side2 > 0) {
      if ((yPlacement + seg) <= (height - 20)) {
        yPlacement += seg;
        side2 -= seg;
      } 
      else {
        xPlacement -= (seg - side2);
        side3 -= (seg - side2);
        side2 = 0;
        yPlacement = (height - 20);
      }      
    }
    else if (side3 > 0) {
      if ((xPlacement - seg) >= 20) {
        xPlacement -= seg;
        side3 -= seg;
      } 
      else {
        yPlacement -= (seg - side3);
        side4 -= (seg - side3);
        side3 = 0;
        xPlacement = 20;
      }      
    }
    else if (side4 > 0) {
      if ((yPlacement - seg) >= 20) {
        yPlacement -= seg;
        side4 -= seg;
      }      
    }
    
  }
  for (var i = 0; i < balls.length; i++) {
      balls[i].draw();
  }
  evil.draw();
  
  ballsCreated = 1;
}




//// Animation Loop ////
function loop() {
  if (gameStarted) {
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(0, 0, width, height);

    if (!ballsCreated) {
      initiateBalls();
    }

    for (var i = 0; i < balls.length; i++) {
        balls[i].update();
    }
    for (var i = 0; i < balls.length; i++) {
        balls[i].collisionDetect();
    }
    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
    }
    // for (var i = 0; i < balls.length; i++) {
    //   balls[i].collisionDetect();
    // }
    if (evil.free) {
      updateTime();
    }
    if (balls.length === 0) {
      reset();
    }
    else {
      evil.draw();
      evil.update();
    }
    requestAnimationFrame(loop);
  }
  else {
    whatKey();
    requestAnimationFrame(loop);
  }
}
//////////////////

var evil;
var canvas;
var container;
var menu;
var gameover;
var hiScore;
var ctx;
var timer;
var timerCount;
var width;
var height;
var loopStarted;

function initGame() {
    //Initiate Game
    gameStarted = 0;
    canvas = document.querySelector('canvas');
    container = document.querySelector('.game-container');
    menu = document.querySelector('.menu');
    gameover = document.querySelector('.gameover');
    hiScore = document.querySelector('.hiScore');
    ctx = canvas.getContext('2d');
    timer = document.querySelector('.timer');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    width = canvas.width;
    height = canvas.height;

    timerCount = document.createElement('div');
    timerCount.setAttribute('class', 'count');
    timerCount.textContent = "0.0";
    timer.appendChild(timerCount);

    evil = new Evil();
    initiateBalls();
    if (!loopStarted) {
        loop();
        loopStarted = true;
    }
}