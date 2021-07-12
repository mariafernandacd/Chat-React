import React from "react";
import { connect } from "react-redux";
import { chatActions } from "redux/reducers/chatReducer";
import { parseContact } from "utils/parseContact";
import { Contact } from "views/components/Contact";

import "./_ContactList.scss";

//componente creado para una lista de contactos, 
//consumiendo una api para agregar nuevos contactos valga la redundancia.

const mapStateToProps = (state, props) => {
  const contactList = state.chat.users;
  return {
    contactList,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    openChatMessage: (index) => {
      dispatch(chatActions.setActiveuser(index));
    },
    createNewChat: async () => {
      try {
        const response = await fetch(`https://randomuser.me/api`);
        const data = await response.json();
        const contact = parseContact(data.results[0]);

        dispatch(chatActions.addContact(contact));
      } catch (err) {
        console.error(err);
      }
    },
  };
};

const ContactList = ({ contactList, openChatMessage, createNewChat }) => {
  return (
    <div className="toast-container">
      <div className="container-fluid">
        <img className="logo" src="/images/psh_brand.png" alt="" />
        <h3 className="header">React Chat</h3>
      </div>

      {contactList.map((contact, index) => (
        <Contact
          key={index}
          contact={contact}
          onOpenChat={openChatMessage}
          index={index}
        />
      ))}

      <button className="create" onClick={createNewChat}>
        + Create New
      </button>
    </div>
  );
};

export const ConnectContactList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);
