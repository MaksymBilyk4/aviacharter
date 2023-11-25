import React from 'react';
import {useSelector} from "react-redux";
import {
    allNotesSelector,
    completedNotesSelector,
    expiredNotesSelector,
    notCompletedNotesSelector
} from "../../redux/selector/noteSelector";
import {Badge, Form} from "antd";
import {Link} from "react-router-dom";
import {
    CheckCircleFilled, ClockCircleFilled, CopyFilled,
    ExclamationCircleFilled,
} from "@ant-design/icons";

const Notes = () => {

    const notes = useSelector(allNotesSelector);
    const completed = useSelector(completedNotesSelector);
    const expired = useSelector(expiredNotesSelector);
    const notCompleted = useSelector(notCompletedNotesSelector);

    return (
        <>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <Link to={"#"}>
                    <Badge count={notes?.length}>
                        <CopyFilled style={{fontSize: "36px"}} shape="square" size="large"/>
                    </Badge>
                    <h2 style={{color: "black"}}>Всі примітки</h2>
                </Link>
                <Link to={"#"}>
                    <Badge count={notCompleted?.length}>
                        <ClockCircleFilled style={{fontSize: "36px", color: "#fa541c"}} shape="square" size="large"/>
                    </Badge>
                    <h2 style={{color: "#fa541c"}}>Не виконані</h2>
                </Link>
                <Link to={"#"}>
                    <Badge count={expired?.length}>
                        <ExclamationCircleFilled style={{fontSize: "36px", color: "#ff4d4f"}} shape="square" size="large"/>
                    </Badge>
                    <h2 style={{color: "#ff4d4f"}}>Просрочені</h2>
                </Link>
                <Link to={"#"}>
                    <Badge count={completed.length}>
                        <CheckCircleFilled style={{fontSize: "36px", color: "#73d13d"}} shape="square" size="large"/>
                    </Badge>
                    <h2 style={{color: "#73d13d"}}>Виконані</h2>
                </Link>
            </div>

            <Form>

            </Form>
        </>
    );
};

export default Notes;