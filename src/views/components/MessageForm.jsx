import React, { useState } from "react";

import "./_MessageForm.scss";

export const MessageForm = ({ onSubmit }) => {
  const [textMessage, setTextMessage] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(textMessage);
    setTextMessage("");
  };
  return (
    <form className="row" onSubmit={onSubmitForm}>
      <div className="form-send">
        <input
          type="text"
          value={textMessage}
          placeholder="Type your message..."
          className="form-control"
          name="nombre"
          onChange={(e) => setTextMessage(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-send">
        SEND
      </button>
    </form>
  );
};
