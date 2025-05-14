function sendMessage() {
    let inputField = document.getElementById("message-input");
    let messageText = inputField.value.trim();

    if (messageText !== "") {
        let chatBox = document.getElementById("chat-box");

        // ユーザーのメッセージを追加
        let userMessage = document.createElement("div");
        userMessage.classList.add("message", "user-message");
        userMessage.textContent = messageText;
        chatBox.appendChild(userMessage);

        // メッセージ入力欄をクリア
        inputField.value = "";

        // 自動スクロール
        chatBox.scrollTop = chatBox.scrollHeight;

        // Botの応答（1秒後に表示）
        setTimeout(() => {
            botReply(messageText);
        }, 1000);
    }
}

// Enterキーで送信する機能
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Botの応答
function botReply(userMessage) {
    let chatBox = document.getElementById("chat-box");

    let botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");

    // シンプルな返信ロジック（固定のメッセージ）
    let responses = {
        "こんにちは": "こんにちは！元気ですか？",
        "元気？": "私は元気です！あなたは？",
        "ありがとう": "どういたしまして 😊",
        "さようなら": "また話しましょう！👋",
    };

    botMessage.textContent = responses[userMessage] || "すみません、よく分かりません 💦";
    
    chatBox.appendChild(botMessage);

    // 自動スクロール
    chatBox.scrollTop = chatBox.scrollHeight;
}
