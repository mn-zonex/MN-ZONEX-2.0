const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');
canvas.width=innerWidth;
canvas.height=innerHeight;

let gameRunning=false,paused=false,score=0,health=100;
const scoreEl=document.getElementById('score');

const player={x:canvas.width/2,y:canvas.height/2,size:20,speed:4};
const bullets=[],zombies=[];
const keys={};

function startGame(){
document.getElementById('menu').classList.remove('active');
gameRunning=true;
}

function togglePause(){paused=!paused;}

function endGame(){
gameRunning=false;
document.getElementById('gameover').classList.add('active');
document.getElementById('finalScore').innerText='Score: '+score;
}

window.addEventListener('keydown',e=>keys[e.key]=true);
window.addEventListener('keyup',e=>keys[e.key]=false);

canvas.addEventListener('click',shoot);

function move(dir){
if(dir==='up')player.y-=player.speed;
if(dir==='down')player.y+=player.speed;
if(dir==='left')player.x-=player.speed;
if(dir==='right')player.x+=player.speed;
}

function shoot(){
bullets.push({x:player.x,y:player.y,dx:0,dy:-7});
}

function spawnZombie(){
const edge=Math.random()<0.5?0:canvas.width;
zombies.push({x:edge,y:Math.random()*canvas.height,size:22,speed:1.2});
}
setInterval(spawnZombie,1200);

function update(){
if(!gameRunning||paused)return;

if(keys['w'])player.y-=player.speed;
if(keys['s'])player.y+=player.speed;
if(keys['a'])player.x-=player.speed;
if(keys['d'])player.x+=player.speed;

bullets.forEach(b=>b.y+=b.dy);
zombies.forEach(z=>{
const dx=player.x-z.x,dy=player.y-z.y;
const d=Math.hypot(dx,dy);
z.x+=(dx/d)*z.speed;
z.y+=(dy/d)*z.speed;
if(d<z.size+player.size){health-=1;if(health<=0)endGame();}
});

bullets.forEach((b,bi)=>{
zombies.forEach((z,zi)=>{
if(Math.hypot(b.x-z.x,b.y-z.y)<z.size){
bullets.splice(bi,1);
zombies.splice(zi,1);
score+=10;
scoreEl.innerText='Score: '+score;
}
});
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

// background
ctx.fillStyle='#1a1a1a';
ctx.fillRect(0,0,canvas.width,canvas.height);

// player
ctx.fillStyle='cyan';
ctx.beginPath();
ctx.arc(player.x,player.y,player.size,0,Math.PI*2);
ctx.fill();

// bullets
ctx.fillStyle='yellow';
bullets.forEach(b=>{
ctx.beginPath();
ctx.arc(b.x,b.y,5,0,Math.PI*2);
ctx.fill();
});

// zombies
ctx.fillStyle='lime';
zombies.forEach(z=>{
ctx.beginPath();
ctx.arc(z.x,z.y,z.size,0,Math.PI*2);
ctx.fill();
});

// health bar
ctx.fillStyle='red';
ctx.fillRect(20,50,health*2,10);
}

function loop(){
update();
draw();
requestAnimationFrame(loop);
}
loop();
