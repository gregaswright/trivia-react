import React, { Fragment } from "react";
import { ActionCable } from "react-actioncable-provider";

function Cable({gameRooms, handleReceivedMessages}) {
    return (
        <Fragment>
            {gameRooms.map( gameRoom => {
                return (
                    <ActionCable
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