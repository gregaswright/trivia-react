import React from "react";
import NewMessageForm from './NewMessageForm'

const MessageArea = (props) => {
    
    return (
        <div>
            <h2>{props.gameRoom.name}</h2>
            <ul>{orderedMessages(props.gameRoom.messages)}</ul>
            <NewMessageForm game_room_id={props.gameRoom} />
        </div>
    );
};


export default MessageArea;


const orderedMessages = (messages) => {
    
    const sortedMessages = messages.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    return sortedMessages.map(message => {
        return <li key={message.id}>{message.content}</li>
    })
}