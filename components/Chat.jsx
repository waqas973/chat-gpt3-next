import { useState } from "react";
const { OpenAIApi, Configuration } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    setLoading(true);
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: input,
      })
      .then((response) => {
        const message = response.data.choices[0].text;
        setInput("");
        addMessage(message);
        setLoading(false);
      });
  };
  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <>
            <div key={index}>
              {index + 1}.{message}
            </div>
          </>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter your message"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {" "}
          {loading ? "loading..." : "Send"}{" "}
        </button>
      </form>
    </div>
  );
};

export default Chat;
