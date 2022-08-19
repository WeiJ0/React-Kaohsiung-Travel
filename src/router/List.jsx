
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { zipCode } from "../assets/zipCode";
import { getLsItem, setLsItem } from "../common";
import InfoItem from "../components/InfoItem";


export default function List() {
    const state = useLocation();
    let condition = state.state ? state.state.condition : 0;
    let scroll = state.state ? state.state.scroll : 0;

    const [scrollV, setScrollV] = useState(0);
    const [infoItems, setInfoItems] = useState([]);
    const [filter, setFilter] = useState(condition);
    const [zipCodeList, setZipCodeList] = useState(zipCode);

    const currentInfoItems = () => {
        if (filter === 0)
            return infoItems;
        else
            return infoItems.filter(item => item.Zipcode === filter);
    }

    const getApiData = () => {
        if (getLsItem('infos'))
            setInfoItems(JSON.parse(getLsItem('infos')));
        else {
            fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
                .then(res => res.json())
                .then(result => {
                    setLsItem('infos', JSON.stringify(result.data.XML_Head.Infos.Info));
                    setInfoItems(result.data.XML_Head.Infos.Info);
                })
        }
    }

    useEffect(() => {
        getApiData();
        document.addEventListener("scroll", (e) => {
            setScrollV(window.scrollY);
        })
        setTimeout(() => {
            window.scrollTo({ top: scroll });
        }, 100);
    }, [])

    return (
        <>
            <section className="info-filter">
                <div className="info-filter-select">
                    <label htmlFor="info-filter-select-input">區域篩選</label>
                    <div className="nes-select">
                        <select id="info-filter-select-input" onChange={(e) => setFilter(e.target.value)}>
                            <option value="0">請選擇區域</option>
                            {zipCodeList.map(item => {
                                const { zip, name } = item;
                                return <option key={zip} value={zip} selected={filter === zip}>{name}</option>
                            })}
                        </select>
                    </div>
                </div>
            </section>
            <ul id="list" className="info-list">
                {currentInfoItems().map(item => {
                    return <InfoItem id={item.Name} key={item.Id} info={item} condition={filter} scroll={scrollV} />
                })}
            </ul>
        </>
    )
}