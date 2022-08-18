import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { setHistory } from "../common";

function GoogleMapBtn(props) {
    const { Py, Px } = props;
    return (
        <a target={'_blank'} href={`https://www.google.com/maps?q=${Py},${Px}`} class="nes-btn is-warning">Google Map 連結</a>
    )
}

export default function Detail(props) {
    const state = useLocation();
    const condition = state.state.condition || 0;
    const [info, setInfo] = useState(state.state.data);
    const { Id, Name, Picture1, Picdescribe1, Toldescribe, Add, Tel, Travellinginfo, Opentime, Px, Py, Website } = info;
    setHistory(Id);

    return (
        <section className="detail">
            <section className="nes-container is-dark with-title">
                <p className="title">{Name}</p>
                <img src={Picture1} alt={Picdescribe1} />
                <div className="lists">
                    <ul className="nes-list lists is-circle">
                        {Tel ? <li>電話: {Tel}</li> : ''}
                        {Opentime ? <li>開放時間：: {Opentime}</li> : ''}
                        {Add ? <li>地址：: {Add}</li> : ''}
                        {Website ? <li>網站: {Website}</li> : ''}

                    </ul>
                </div>
                <details><summary>詳細介紹</summary>
                    <p className="info-desc">{Toldescribe}</p>
                </details>
                {Travellinginfo ?
                    <p class="nes-balloon from-left nes-pointer info-travel">{Travellinginfo}</p> :
                    ''
                }
                {(Py && Px) ?
                    <div>
                        <GoogleMapBtn Py={Py} Px={Px} />
                    </div> : ''}

            </section>
            <div className="back-btn">
                <Link className="nes-btn" to={`/list`} state={{ condition }}>回列表頁</Link>
            </div>
        </section>
    )
}