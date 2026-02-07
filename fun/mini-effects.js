// 🔥 Mini-effects for MN-ZONEX 2.0
// Can be added to index.html or any page for fun animations

// 1️⃣ Random background color flashes on hero section
function heroColorFlash(){
  const hero = document.querySelector('.hero');
  if(!hero) return;

  setInterval(()=>{
    const r = Math.floor(Math.random()*50)+20;
    const g = Math.floor(Math.random()*50)+20;
    const b = Math.floor(Math.random()*50)+20;
    hero.style.background = `rgb(${r}, ${g}, ${b})`;
  }, 5000); // every 5 seconds
}

// 2️⃣ Easter egg: Konami code
const konamiCode = [38,38,40,40,37,39,37,39,66,65]; // ↑ ↑ ↓ ↓ ← → ← → B A
let konamiIndex = 0;

document.addEventListener('keydown', function(e){
  if(e.keyCode === konamiCode[konamiIndex]){
    konamiIndex++;
    if(konamiIndex === konamiCode.length){
      alert('🎉 You found the MN-ZONEX easter egg!');
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

// 3️⃣ Floating neon particles on background
function createParticles(){
  const body = document.body;
  for(let i=0;i<30;i++){
    const p = document.createElement('div');
    p.className='neon-particle';
    p.style.position='absolute';
    p.style.width=p.style.height='4px';
    p.style.background='#00e5ff';
    p.style.borderRadius='50%';
    p.style.top = Math.random()*window.innerHeight+'px';
    p.style.left = Math.random()*window.innerWidth+'px';
    p.style.opacity = Math.random();
    p.style.transition = 'all 2s ease';
    body.appendChild(p);

    setInterval(()=>{
      p.style.top = Math.random()*window.innerHeight+'px';
      p.style.left = Math.random()*window.innerWidth+'px';
      p.style.opacity = Math.random();
    },3000);
  }
}

// 4️⃣ Call effects when page loads
window.addEventListener('load', ()=>{
  heroColorFlash();
  createParticles();
});