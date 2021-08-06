import React from "react";
import "./_Message.scss";

export const Message = ({ message }) => {
  let messageClass = "message-row";

  if (!message.id) {
    messageClass += " self-message";
  }

  return (
    <div className={messageClass}>
      <small className="time time-two">{message.timestamp}</small>
      <img className="img-avatar" src={message.avatar} alt="" />
      <div className="message">
        <p className="cnt-message">{message.text}</p>
      </div>
    </div>
  );
};
