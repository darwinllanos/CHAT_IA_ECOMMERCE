import React, { useState, useEffect, useRef } from "react";
import styles from "./Chat.module.css";

const Chat = () => {
    const [messages, setMessages] = useState([
      { id: 1, text: "¡Hola! ¿Cómo puedo ayudarte?", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const chatEndRef = useRef<HTMLDivElement>(null);
  
    // Función para enviar mensaje
    const sendMessage = () => {
      if (input.trim() === "") return;
  
      const newMessage = { id: messages.length + 1, text: input, sender: "user" };
      setMessages([...messages, newMessage]);
  
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 1, text: "Respuesta automática 🤖", sender: "bot" },
        ]);
      }, 1000);
  
      setInput("");
    };
  
    // Para hacer scroll al último mensaje
    useEffect(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
  
    return (
      <div className={styles.chatContainer}>
        <div className={styles.chatBox}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.message} ${msg.sender === "user" ? styles.userMessage : styles.botMessage}`}>
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>
  
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.chatInput}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
          />
          <button className={styles.sendButton} onClick={sendMessage}>Enviar</button>
        </div>
      </div>
    );
  };

export default Chat;