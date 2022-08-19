
import { useState, useEffect } from "react";
import { getLsItem, getHistory } from "../common";

import InfoItem from "../components/InfoItem";


export default function History() {
    const [infoItems, setInfoItems] = useState(JSON.parse(getLsItem('infos')));
    let history = getHistory();

    let historyList = [];
    infoItems.forEach(item => {
        if (history.indexOf(item.Id) !== -1) {
            historyList.push(item);
        }
    })

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <>
            <h2>瀏覽紀錄</h2>
            <ul className="info-list">
                {historyList.map(item => {
                    return <InfoItem info={item} />
                })}
            </ul>
        </>
    )
}