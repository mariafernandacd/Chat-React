import React from "react";
import "./_Contact.scss";

//componente creado para obtener cada contacto en la lista, junto con su ultimo

export const Contact = ({ index, contact, onOpenChat }) => {
  const lastMessage = contact.messages
    ? contact.messages[contact.messages.length - 1]
    : null;

  return (
    <div className="toast" key={contact.id} onClick={() => onOpenChat(index)}>
      <div className="toast-header">
        <img src={contact.avatar} alt="" />
        <strong className="me-auto">{contact.name}</strong>
        <small className="text-muted">{lastMessage?.timestamp}</small>
      </div>
      <div className="toast-body">{lastMessage?.text}</div>
    </div>
  );
};
