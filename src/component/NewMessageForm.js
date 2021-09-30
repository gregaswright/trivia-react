import React, {useState, useEffect} from "react";
import { API_ROOT, HEADERS } from "../constants";

const NewMessageForm = (props) => {

    const [messageContent, setMessageContent] = useState('');
    const [gameRoomId, setGameRoomID] = useState(null);

    useEffect( () => {
        setGameRoomID(props.game_room_id.id)
    }, [props.game_room_id.id])

    console.log(messageContent, gameRoomId)
    
    const changeHandler = (event) => {
        setMessageContent(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        fetch(`${API_ROOT}/messages`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                    content: messageContent,
                    game_room_id: gameRoomId,
                    user_id: 1
            })
        });
        setMessageContent('')
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>New Message:</label>
                <br />
                <input
                    type='text'
                    value={messageContent}
                    onChange={changeHandler}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default NewMessageForm;