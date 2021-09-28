import React, {useState, useEffect} from 'react';
import { ActionCable } from "react-actioncable-provider";
import { API_ROOT } from "../constants";
// import NewConversationForm from './NewConversationForm';
// import MessagesArea from './MessageArea';
import Cable from './Cable';

function GameRoomList() {

    const [gameRooms, setGameRooms] = useState([]);
    const [activeGameRoom, setActiveGameRoom] = useState(null);

    useEffect(() => {
        fetch(`${API_ROOT}/game_rooms`)
        .then(res => res.json())
        .then(gameRooms => setGameRooms(gameRooms));
    });


    // console.log(gameRooms)

    const clickHandler = (id) => {
        setActiveGameRoom(id);
    };

    const handleReceivedGameRoom = (response) => {
        const { gameRoom } = response;
        setGameRooms([ ...gameRooms, gameRoom])
    };

    const handleReceivedMessages = (response) => {
        const { message } = response;
        const gRs = [...gameRooms];
        const gameRoom = gRs.find(
            gameR => gameR.id === message.game_room_id
        );
        gameRoom.messages = [...gameRoom.messages, message];
        setGameRooms(gRs);
    };

    const mapGameRooms = (gRs, handleClick) => {
        return gRs.map( gR => {
            return (
                <li key={gR.id} onClick={() => handleClick(gR.id)}>
                    {gR.name}
                </li>
            );
        });
    };

    const findActiveGameRooms = (gRs, activeGRs) => {
        return gRs.find (
            gR => gR.id === activeGRs
        );
    };

    return (
        <div>
            <ActionCable
            channel={{channel: 'GameRoomsChannel'}}
            onReceived={handleReceivedGameRoom}
            />
            {gameRooms.length ? (
            <Cable
                gameRooms={gameRooms}
                handleReceivedMessage={handleReceivedMessages}
            /> ) : null}
        <h2>Game Rooms</h2>
        <ul>{mapGameRooms(gameRooms, clickHandler)}</ul>
        </div>
    )
}

export default GameRoomList

