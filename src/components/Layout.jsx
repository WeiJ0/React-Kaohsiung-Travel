import { Outlet, useLocation } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    let location = useLocation();
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <>
            <div className="layout">
                <Header />
                <div className={location.pathname !== "/" ? "nes-container is-centered" : "is-centered"}>
                    <Outlet />
                </div>
                <Footer />
            </div>
            <button type="button" onClick={toTop} className="nes-btn is-error scroll-btn active"><span>&lt;</span></button>
        </>
    )
}