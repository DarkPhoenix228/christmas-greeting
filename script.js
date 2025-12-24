// Snowfall
function createSnow() {
    const snow = document.createElement('div');
    snow.className = 'snow';
    snow.textContent = '❄';
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = Math.random() * 3 + 2 + 's';
    snow.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 5000);
}

setInterval(createSnow, 200);

// Particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
    particle.style.animationDuration = Math.random() * 4 + 3 + 's';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 7000);
}

setInterval(createParticle, 500);

// Button interactions
const revealBtn = document.getElementById('revealBtn');
const surpriseBtn = document.getElementById('surpriseBtn');
const message = document.getElementById('message');
const surprise = document.getElementById('surprise');

revealBtn.addEventListener('click', () => {
    message.classList.add('show');
    revealBtn.style.display = 'none';
    surpriseBtn.style.display = 'inline-block';
});

surpriseBtn.addEventListener('click', () => {
    surprise.classList.add('show');
    surpriseBtn.style.display = 'none';
});