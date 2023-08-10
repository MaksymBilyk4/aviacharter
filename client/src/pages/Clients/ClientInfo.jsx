import React from 'react';
import {useParams} from "react-router-dom";

const ClientInfo = () => {

    const {id} = useParams();

    return (
        <div>
            client id: {id}
        </div>
    );
};

export default ClientInfo;