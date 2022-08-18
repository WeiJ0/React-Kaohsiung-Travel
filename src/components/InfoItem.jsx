import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function InfoItem(props) {
    const { Id, Name, Picture1, Description } = props.info;
    const condition = props.condition;
    const scroll = props.scroll;
    return (
        <li className="nes-btn is-dark info-card" key={Id}>
            <Link to={`/info/${Id}`} state={{ data: props.info, condition, scroll }}>
                <LazyLoadImage src={Picture1} height={150} />
                <h3 className="info-name">{Name}</h3>
                <p className="info-desc">{Description}</p>
            </Link>
        </li>
    )
}