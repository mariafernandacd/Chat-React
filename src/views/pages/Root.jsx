import React from 'react';
import { ConnectContactList } from "views/components/ContactList"; 
import { ConnectChatFeed } from "views/components/ChatFeed"; 
import "./_Root.scss";
 
  export const Root = () => {
    return (
     <div className="chat-react">
      <ConnectContactList/>
      <ConnectChatFeed/>
     </div>
    );
  }
  
  