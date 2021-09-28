import React, {useState} from 'react';
import { API_ROOT, HEADERS } from '../constants';

const NewConversationForm = () => {

    const [title, setTitle] = useState('')

    const changeHandler = (event) => {
        setTitle(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        fetch(`${API_ROOT}/game_rooms`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(title)
        });
        setTitle('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    New Game Room:
                </label>
                <br/>
                <input
                    type="text"
                    value={title}
                    onchange={changeHandler}
                />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default NewConversationForm;