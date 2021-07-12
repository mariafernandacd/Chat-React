import React from "react";
import { connect } from "react-redux";
import { chatActions } from "redux/reducers/chatReducer";
import { Message } from "./Message";
import { MessageForm } from "./MessageForm";
import { AVATAR } from "utils/avatarHelper";

import "./_ChatFeed.scss";

//componente creado para la interaccion con cada contacto, se consumio una API para obtener mensajes random.

const mapStateToProps = ({ chat }, props) => {
  const activeUser = chat.activeUser;
  const contactChat = chat.users[activeUser];
  const messages = chat.activeMessages;

  return {
    contact: contactChat,
    messages,
    activeUser,
  };
};

const getTimestamp = () => {
  const date = new Date();
  const ampm = date.getHours() > 12 ? "pm" : "am";
  let hour = date.getHours() - 12;
  let minutes = date.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hour}:${minutes} ${ampm}`;
};

const parseMessage = (message, actor) => ({
  timestamp: getTimestamp(),
  id: actor?.id,
  name: actor?.name,
  text: message,
  carreer: actor?.carreer,
  avatar: actor?.avatar ?? AVATAR.DEFAULT,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    sendMessage: async (text, receiver, idx) => {
      const message = parseMessage(text);
      dispatch(chatActions.sendMessage(message, idx));

      try {
        const response = await fetch(
          `https://uselessfacts.jsph.pl/random.json?language=en`
        );
        const { text: receiverResponse } = await response.json();

        setTimeout(() => {
          dispatch(
            chatActions.sendMessage(
              parseMessage(receiverResponse, receiver),
              idx
            )
          );
        }, 2300);
      } catch (err) {
        console.error(err);
      }
    },
  };
};

const ChatFeed = ({ activeUser, contact, messages, sendMessage }) => {
  const onSubmit = (textMessage) => {
    if (!textMessage) {
      return;
    }

    sendMessage(textMessage, contact, activeUser);
  };

  if (!contact) {
    return <></>;
  }

  return (
    <div className="chat">
      <div className="toast-chat">
        <img className="picture-profile" src={contact.avatar} alt="" />
        <strong className="me-auto">{contact.name}</strong>
      </div>
      <div className="toast-body">{contact.carreer}</div>
      <div className="cnt-chat">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <MessageForm onSubmit={onSubmit} />
    </div>
  );
};

export const ConnectChatFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatFeed);
