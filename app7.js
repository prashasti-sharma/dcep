document.addEventListener("DOMContentLoaded", function () {

    const sendMessageButton = document.querySelector('.message-input button');
    const messageInput = document.querySelector('.message-input input');
    const chatMessagesContainer = document.querySelector('.chat-messages');
  
    sendMessageButton.addEventListener('click', function () {
      const messageText = messageInput.value.trim();
      
      if (messageText !== "") {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.innerHTML = `
          <p>${messageText}</p>
          <span class="message-timestamp">${getCurrentTime()}</span>
        `;
        chatMessagesContainer.appendChild(newMessage);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        messageInput.value = "";
      }
    });
    const backButton = document.querySelector('.back-button');
    if (backButton) {
      backButton.addEventListener('click', function () {
        window.history.back();
      });
    }
    const conversationItems = document.querySelectorAll('.conversation-item a');
    
    conversationItems.forEach(item => {
      item.addEventListener('click', function () {
        const conversation = item.closest('.conversation-item');
        conversation.classList.remove('unread');
      });
    });

    function getCurrentTime() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      const strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
  
  });
  