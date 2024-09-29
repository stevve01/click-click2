// Основные переменные
let score = parseInt(localStorage.getItem('score')) || 0;
let clickMultiplier = parseInt(localStorage.getItem('clickMultiplier')) || 1;
let level = parseInt(localStorage.getItem('level')) || 1;
let goal = level * 100;
let autoClickerActive = localStorage.getItem('autoClickerActive') === 'true';
let fastClickerActive = localStorage.getItem('fastClickerActive') === 'true';
let totalClicks = parseInt(localStorage.getItem('totalClicks')) || 0;
let playTime = 0;

// Обновление счёта, уровня и целей
function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('level').innerText = `Level: ${level}`;
    document.getElementById('goal').innerText = `Goal: ${goal} points`;
    localStorage.setItem('score', score);
    localStorage.setItem('level', level);
    localStorage.setItem('totalClicks', totalClicks);
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

// Проверка на повышение уровня
function checkLevelUp() {
    if (score >= goal) {
        level++;
        goal = level * 100;
        openModal(`Congrats! You've reached level ${level}`);
        updateScore();
    }
}

// Покупка авто-кликера
document.getElementById('auto-clicker').addEventListener('click', function() {
    if (score >= 50 && !autoClickerActive) {
        score -= 50;
        updateScore();
        autoClickerActive = true;
        localStorage.setItem('autoClickerActive', 'true');
        startAutoClicker();
        this.innerText = 'Auto-Clicker Active';
        this.disabled = true;
    }
});

// Покупка ускоренного авто-кликера
document.getElementById('fast-clicker').addEventListener('click', function() {
    if (score >= 500 && !fastClickerActive) {
        score -= 500;
        updateScore();
        fastClickerActive = true;
        localStorage.setItem('fastClickerActive', 'true');
        startFastClicker();
        this.innerText = 'Fast Clicker Active';
        this.disabled = true;
    }
});

// Воспроизведение фоновой музыки
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.2;
backgroundMusic.play();

// Модальное окно для поздравлений
function openModal(message) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-text').innerText = message;
    modal.style.display = 'flex';
}

// Закрытие модального окна
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Авто-кликер
function startAutoClicker() {
    setInterval(function() {
        score++;
        updateScore();
        checkLevelUp();
    }, 1000); // Один клик каждую секунду
}

// Ускоренный авто-кликер
function startFastClicker() {
    setInterval(function() {
        score += 2;
        updateScore();
        checkLevelUp();
    }, 500); // Два клика каждую полсекунды
}

// Обновление статистики
function updateStats() {
    document.getElementById('total-clicks').innerText = `Total Clicks: ${totalClicks}`;
    document.getElementById('play-time').innerText = `Time Played: ${playTime} seconds`;
    playTime++;
    setTimeout(updateStats, 1000);
}

// Запуск игры
updateScore();
updateStats();
if (autoClickerActive) startAutoClicker();
if (fastClickerActive) startFastClicker();
