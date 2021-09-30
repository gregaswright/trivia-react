import React, {useState} from 'react';
import { API_ROOT, HEADERS } from '../constants';

const NewConversationForm = () => {

    const [name, setName] = useState('')

    const changeHandler = (event) => {
        setName(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        fetch(`${API_ROOT}/game_rooms`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({name})
        });
        setName('')
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
                    value={name}
                    onChange={changeHandler}
                />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default NewConversationForm;