import React from "react";

function Input() {
  return (
    <div className="input">
      <input placeholder="Ask me anything!" />
      <button>Send</button>
    </div>
  );
}

//  for msg display bot and user
function ChatMessage({ message, sender }) {
  return (
    <div className="Msg">
      {sender === "Bot" && <img src="Bot.png" alt="Bot" />}
      &ensp;{message}&ensp;
      {sender === "User" && <img src="user.png" alt="User" />}
    </div>
  );
}

// for Save msg
function ChatArray() {
  // const Arrays =React.useState([
  //   { message: "Hello", sender: "User", id: "id1" },
  //   { message: "How can I help you!", sender: "Bot", id: "id2" },
  //   { message: "Idk i forgot", sender: "User", id: "id3" },
  //   { message: "its ok", sender: "Bot", id: "id4" },
  // ]);
  // const ChatMessage = Arrays[0];
  // const setChatMessage = Arrays[1];
  const chats = [
    { message: "Hello", sender: "User", id: "id1" },
    { message: "How can I help you!", sender: "Bot", id: "id2" },
    { message: "Idk i forgot", sender: "User", id: "id3" },
    { message: "its ok", sender: "Bot", id: "id4" },
  ];
  function SendMessage() {
    ChatArray.push({
      message: "Test", sender: "User", id: crypto.randomUUID()
    });
    console.log(ChatArray);
    // setChatMessage([
    //   ...ChatMessage,
    //   {
    //       message: "Test", sender: "User", id: crypto.randomUUID()
    //   }
    // ]);
  }
  return (
    <>
      <button onClick={SendMessage}>Send Message</button>

      {chats.map((chat) => (
        <ChatMessage
          key={chat.id}
          message={chat.message}
          sender={chat.sender}
        />
      ))}
    </>
  );
}

function App() {

  return (
    <>
      <center>
        <div className="box">
          <ChatArray />
          <Input />
        </div>
      </center>
    </>
  );
}

export default App;