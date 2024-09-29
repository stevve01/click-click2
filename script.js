// Основные переменные
let score = parseInt(localStorage.getItem('score')) || 0;
let clickMultiplier = parseInt(localStorage.getItem('clickMultiplier')) || 1;
let level = parseInt(localStorage.getItem('level')) || 1;
let goal = level * 100;
let autoClickerActive = localStorage.getItem('autoClickerActive') === 'true';
let totalClicks = parseInt(localStorage.getItem('totalClicks')) || 0;

// Обновление счёта
function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('level').innerText = `Level: ${level}`;
    document.getElementById('goal').innerText = `Goal: ${goal} points`;
    localStorage.setItem('score', score);
    localStorage.setItem('level', level);
}

// Добавляем звук клика
const clickSound = document.getElementById('click-sound');
document.getElementById('click-btn').addEventListener('click', function() {
    clickSound.play();
    score += clickMultiplier;
    totalClicks++;
    updateScore();
    checkLevelUp();
});

// Открытие и закрытие магазина
const shopBtn = document.getElementById('shop-btn');
const shopModal = document.getElementById('shop-modal');
const closeShop = document.querySelector('.close');

shopBtn.addEventListener('click', function() {
    shopModal.style.display = 'flex';
});

closeShop.addEventListener('click', function() {
    shopModal.style.display = 'none';
});

// Проверка на повышение уровня
function checkLevelUp() {
    if (score >= goal) {
        level++;
        goal = level * 100;
        updateScore();
    }
}
