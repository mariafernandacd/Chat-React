import { contain } from "redux/util/contain";

const chatDraft = {
  users: [
    {
      id: "uid1",
      name: "Luciana Gutierrez",
      avatar: "/images/avatar-2.png",
      carreer: "Ingenier",
      messages: [
        {
          timestamp: "10:20 AM",
          id: "uid1",
          name: "Luciana Gutierrez",
          avatar: "/images/avatar-2.png",
          text: "Si tengo alguna otra novedad te comento. Gracias!",
          carreer: "Ingenier",
        },
      ],
    },
    {
      id: "uid1",
      name: "Micaela Perez",
      avatar: "/images/avatar-1.png",
      carreer: "Marketing Manager",
      messages: [
        {
          timestamp: "10:15 AM",
          id: "uid1",
          name: "Micaela Perez",
          avatar: "/images/avatar-1.png",
          text: "Dale, Agendo la meeting para hoy a las 14hs.",
          carreer: "Marketing Manager",
        },
      ],
    },
    {
      id: "uid1",
      name: "Manuel Hoffmann",
      avatar: "/images/avatar-3.png",
      carreer: "Developer",
      messages: [
        {
          timestamp: "9:37 AM",
          id: "uid1",
          name: "Manuel Hoffmann",
          avatar: "/images/avatar-3.png",
          text: "Gracias a vos!",
          carreer: "Developer",
        },
      ],
    },
  ],
  activeMessages: [],
  activeUser: null,
};

const chatReducer = contain((chatDraft, action) => {
  switch (action.type) {
    case "SET_ACTIVE_USER":
      chatDraft.activeUser = action.activeUser;
      chatDraft.activeMessages = [
        ...(chatDraft.users[action.activeUser]?.messages ?? []),
      ];
      break;
    case "SET_CHAT_CONTACT":
      chatDraft.users = [...chatDraft.users, action.contact];
      break;
    case "SET_SEND_MESSAGE":
      chatDraft.activeMessages = [...chatDraft.activeMessages, action.message];
      break;
  }

  return chatDraft;
}, chatDraft);

const chatActions = {
  setActiveuser: (activeUser) => ({
    type: "SET_ACTIVE_USER",
    activeUser,
  }),
  addContact: (contact) => ({
    type: "SET_CHAT_CONTACT",
    contact,
  }),
  sendMessage: (message, receiver) => ({
    type: "SET_SEND_MESSAGE",
    message,
    receiver,
  }),
};

export { chatReducer, chatActions };
