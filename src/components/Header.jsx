import { Link, useNavigate } from "react-router-dom";
import { getHistory } from "../common";

export default function Header() {
    const navigate = useNavigate();
    let hasHistory = getHistory().length || 0;

    const backIndex = () => {
        navigate("/");
    }

    return (
        <header >
            <div class="nes-container">
                <div className="header">
                    <div className="header_logo" onClick={backIndex}>
                        <section className="icon-list">
                            <i className="nes-icon nes-icon trophy"></i>
                        </section>
                        <h1>高雄旅遊網</h1>
                    </div>
                    <nav>
                        <Link className="nes-btn" to="/list">景點列表</Link>
                        <Link className={hasHistory > 0 ? "nes-btn" : "nes-btn is-disabled"} to="/history">瀏覽紀錄</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}