import React from 'react';
import {useParams} from "react-router-dom";

const OperatorInfo = () => {

    const {id} = useParams();

    return (
        <div>
            operator id: {id}
        </div>
    );
};

export default OperatorInfo;