const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

const botResponses = {
    "привет": "Привет! Как я могу помочь?",
    "как дела?": "Я просто программа, но спасибо, что спросили!",
    "что ты умеешь?": "Я могу отвечать на ваши вопросы и поддерживать беседу!",
    "пока": "До свидания! Надеюсь, увидеть вас снова."
};

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = userInput.value;
    displayMessage(userMessage, 'user');
    userInput.value = '';

    // Генерация ответа от бота
    const botMessage = getBotResponse(userMessage.toLowerCase());
    setTimeout(() => {
        displayMessage(botMessage, 'bot');
    }, 500); // небольшая задержка для эффекта
});

function displayMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = type === 'user' ? 'user-message' : 'bot-message';
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // прокрутка вниз
}

function getBotResponse(userMessage) {
    return botResponses[userMessage] || "Извините, я не понимаю.";
}
