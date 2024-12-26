// Taş-Kağıt-Makas Oyunu
const outcomes = {
  "Taş": { "Taş": "Beraber!", "Kağıt": "Kaybettiniz!", "Makas": "Kazandınız!" },
  "Kağıt": { "Taş": "Kazandınız!", "Kağıt": "Beraber!", "Makas": "Kaybettiniz!" },
  "Makas": { "Taş": "Kaybettiniz!", "Kağıt": "Kazandınız!", "Makas": "Beraber!" }
};

function playGame(playerChoice) {
  const choices = ["Taş", "Kağıt", "Makas"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = outcomes[playerChoice][computerChoice];
  document.getElementById("game-status").textContent = `Siz: ${playerChoice}, Bilgisayar: ${computerChoice}. Sonuç: ${result}`;
}

// Sohbet Sistemi
const chatBox = document.getElementById("chat-box");

function sendMessage() {
  const messageInput = document.getElementById("chat-message");
  const message = messageInput.value.trim();
  if (message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = `Siz: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    messageInput.value = "";

    // Bot cevap versin
    setTimeout(() => {
      const botMessage = document.createElement("p");
      botMessage.textContent = `Bot: Bu harika bir mesaj!`;
      chatBox.appendChild(botMessage);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
}
