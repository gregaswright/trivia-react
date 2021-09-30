import React, { Fragment } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";

function Cable({gameRooms, handleReceivedMessages}) {
    return (
        <Fragment>
            {gameRooms.map( gameRoom => {
                return (
                    <ActionCableConsumer
                    key={gameRoom.id}
                    channel={{channel: 'MessagesChannel', gameRoom: gameRoom.id}}
                    onReceived={handleReceivedMessages}
                    />
                );
            })};
        </Fragment>
    );
};

export default Cable