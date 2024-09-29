* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background: url('https://avatars.mds.yandex.net/i?id=f9ce3862325f61dab82f4cac08c4d17cfcf446b2-9042494-images-thumbs&n=13') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}

header {
    background-color: #333;
    width: 100%;
    padding: 20px 0;
    text-align: center;
}

.logo {
    color: white;
    font-size: 2rem;
    font-weight: bold;
}

/* HUD (интерфейс) */
.hud {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 600px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    margin-bottom: 20px;
    padding: 20px;
}

.hud-item {
    color: white;
    font-size: 1.5rem;
}

.game-section {
    padding: 50px 20px;
    width: 100%;
    max-width: 1200px;
    text-align: center;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

/* Центрирование кнопки клика и удаление фона */
.click-centered {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
}

#click-btn img {
    width: 150px;
    height: auto;
    background-color: transparent; /* Удаляем белый фон */
    padding: 0; /* Убираем отступы */
    display: block;
    cursor: pointer;
    transition: transform 0.2s ease;
}

#click-btn:hover img {
    transform: scale(1.1);
}

/* Кнопка магазина */
.shop-centered {
    display: flex;
    justify-content: center;
    margin: 30px auto;
}

.shop-btn {
    padding: 15px 25px;
    font-size: 1.2rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.shop-btn:hover {
    background-color: #218838;
}

/* Модальное окно магазина */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.shop-content {
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    width: 80%;
    max-width: 600px;
    text-align: center;
}

.shop-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.shop-item {
    margin: 10px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border-radius: 10px;
    width: 150px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.shop-item:hover {
    background-color: #0056b3;
}

.close {
    float: right;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
}

.close:hover {
    color: red;
}

/* Адаптация для телефонов */
@media (max-width: 768px) {
    .hud-item {
        font-size: 1.2rem;
    }

    #click-btn img {
        width: 120px;
    }

    .shop-btn {
        font-size: 1rem;
        padding: 10px 20px;
    }

    h1 {
        font-size: 2rem;
    }
}
